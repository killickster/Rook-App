import { supportsPassiveEventListeners } from '@angular/cdk/platform';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscribable, Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router} from '@angular/router';
import { Game } from '../models/game.model';
import { GamesService } from '../services/games.service';
import { WebSocketService } from '../web-socket.service';
import { BidComponent } from './bid/bid.component';
import {MatSnackBar, MatSnackBarRef, MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { SnackData} from './snack-data';
import { RookAction } from './rook-action';
import {Card} from '../services/models/card.model';
import {RoundState} from '../services/models/round-stage.model';
import {Color} from '../services/models/color.model';
import { Play } from '../services/models/play.model';
import { MoveType } from '../services/models/move-type.model';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-gameroom',
  templateUrl: './gameroom.component.html',
  styleUrls: ['./gameroom.component.css']
})
export class GameroomComponent implements OnInit {
  snack: MatSnackBarRef<any> = null;
  snackMove: MatSnackBarRef<any> = null;
  turn: MatSnackBarRef<any> = null
  misdealSnackBar: any = null
  misdeal: MatSnackBarRef<any> = null
  trumpSnackBar: MatSnackBarRef<any> = null
  cards: Card[] 
  yourTurn: boolean = false
  gameStage: RoundState
  bidForm: FormGroup
  game_id: string
  bidSubscription: Subscription
  kitty: Card[] 
  playedCards: Card[]  = []
  playerNames = []
  hands: Card[][] = []
  points = []
  playing = false
  trump: Color | null = null
  index: number
  currentTrickColor: Color
  numberOfPlayers: number
  rounds = []
  playerInfo = {
    "playerNames" : [],
    "playedCards" : [],
    "currentPlayer" : null,
    "playing" : null,
    "hands" : [],
    "bidWinner" : null,
    "bids": [],
    "roundState": null,
    "bidders": []
  }
  isLeading = false
  currentPlayerIndex: number;
  topPlayers: any = []
  throwOutPoints = false
  gameDone: boolean= false


  constructor(private snackBar: MatSnackBar, private router: Router, private gameService: GamesService, private authService: AuthService, private dialog: MatDialog, private socketService: WebSocketService) { }


  ngOnInit(): void {

    this.gameService.fetchGames()     //Incase of refresh fetches games then checks if your in any of them then sends you to gameroom

    this.gameService.gameState.subscribe(game => {

      if(game !== null){

      this.gameDone = (game['gameFinished'] === true)

          this.gameService.yourIndex.subscribe(index => {

            this.hands = []
            this.playerNames = []
            this.playedCards = []
            this.points = []

            for(let i = 0; i < game.numberOfPlayers; i++){
              this.hands.push(null)
              this.playerNames.push(null)
              this.playedCards.push(null)
              this.points.push(0)
            }

            if(this.playerNames.length > 3){
              this.topPlayers = this.playerNames.slice(2, this.playerNames.length - 1)
            }

            this.index = index

            this.throwOutPoints = game.throwOutPoints

            console.log('throw out points')
            console.log(this.throwOutPoints)

            console.log(index)


            this.rounds = game.rounds


            
            this.game_id = game.game_id 
          
            var round = game['rounds'][game['currentRoundIndex']]

        

            var misdeals = round.misdeals


            var misdeal = false

            if(misdeals.includes(index) && round.hasBid[index] === false){
              this.snackInput(new SnackData('Would you like a redeal?', 'redeal', null))
              misdeal = true
            }else if(misdeals.includes(index)){
              this.misdealSnackBar = this.snackBar.open("You have already bid! You cannot call a misdeal anymore!", null, {
                duration: 2000,
              });
            }

            this.gameStage = round.roundState

            this.yourTurn = game['currentPlayer'] === index ? true : false


            this.numberOfPlayers = game['numberOfPlayers']

            this.currentPlayerIndex = (game['currentPlayer']-index+this.numberOfPlayers)%this.numberOfPlayers
          

            var players = game.players





            var numberOfPlayers = players.length



            var playCards = round.tricks[round.tricks.length-1]
            
            var d = true

            if(playCards){
              this.currentTrickColor = playCards.color
              playCards = playCards.cards


              for(let card of playCards){
                if(card !== null){
                  d = false
                }
              }
            }

            var delay = d && round.tricks.length > 1

            console.log(round.tricks)

            if(delay){
              playCards = round.tricks[round.tricks.length - 2].cards
            }

            this.isLeading = d







          var timeout = 0

          if(this.gameService.roundDone){

            this.cards = []
            this.hands = [[], [], [], []]
            this.kitty = []
            this.playing = true

            var subtract = this.gameDone ? 1 : 2

            var indexOfTrick = game.rounds[game.rounds.length - subtract].tricks.length

            var playCards = game.rounds[game.rounds.length - subtract].tricks[indexOfTrick-2].cards

            for(var i = 0; i < players.length; i++){
              if(players[(i+index)%numberOfPlayers]){
                if(playCards && playCards[(i+index)%numberOfPlayers] !== null){
                  this.playedCards[i] = playCards[(i+index)%numberOfPlayers]  
                }else{
                  this.playedCards[i] = null
                }
                  this.playerNames[i] = players[(i+index)%numberOfPlayers].player_name
                  this.points[i] = players[(i+index)%numberOfPlayers].points
              }
            }
            timeout = 5000
            this.trump = null


              //for rendering the player hands
             this.playerInfo = {
                "playerNames" : this.playerNames,
                "playedCards" : this.playedCards,
                "currentPlayer" : this.currentPlayerIndex,
                "playing" : this.playing,
                "hands" : this.hands,
                "bidWinner" : (this.rounds[this.rounds.length -1].bidWinner-this.index+this.numberOfPlayers)%this.numberOfPlayers,
                "bids" : round.bids,
                "roundState": round.roundState,
                "bidders" : round.bidders
              }


          }else if(!(this.gameStage === RoundState.PLAYING)){
            this.playing = false

          }

          if(!this.gameDone){

            setTimeout(() => {
              this.kitty = round.kitty
              this.playing = false
              for(var i = 0; i < players.length; i++){
                if(players[(i+index)%numberOfPlayers]){
                  if(playCards && playCards[(i+index)%numberOfPlayers] !== null){
                    this.playedCards[i] = playCards[(i+index)%numberOfPlayers]  
                  }else{
                    this.playedCards[i] = null
                  }
                  this.playerNames[i] = players[(i+index)%numberOfPlayers].player_name
                  this.points[i] = players[(i+index)%numberOfPlayers].points
                }
                this.hands[i] = (round.hands[(i+index)%numberOfPlayers])

              }
                this.cards = this.hands[0]
                this.sort(this.cards)

              console.log(this.points)

              console.log('played cardsd')
              console.log(this.playedCards)



            if(this.gameStage === RoundState.BIDDING && this.yourTurn){

              if(!misdeal){
                this.snackInput(new SnackData("", 'bid', round.bid +5))
              }
            }else if(this.gameStage === RoundState.DISCARDING && this.yourTurn){

            }else if(this.gameStage === RoundState.CHOOSING_TRUMP && this.yourTurn){

              var trumpSnackBar = this.snackBar.open("Select a card to indicate trump", null, {
                duration: 0,
              });
            }else if(this.gameStage === RoundState.CHOOSING_PARTNER && this.yourTurn){

              this.snackInput(new SnackData("Enter Card", 'choose_partner', null))

            }else if(this.gameStage === RoundState.PLAYING){
              this.playing = true


              var timeout = 0

              if(this.trump === null){
                var color: Color = round['trump']

                this.trump = color

                var trumpColorString = ''
                switch(color){
                  case Color.BLACK:
                    trumpColorString = 'black'
                    break
                  case Color.RED:
                    trumpColorString = 'red'
                    break;
                  case Color.YELLOW:
                    trumpColorString = 'blue'
                    break;
                  case Color.GREEN:
                    trumpColorString = 'green'
                    break;
                }

                var partnerColorString = ''

                var description = ''
                if(this.numberOfPlayers !== 4 && this.numberOfPlayers !== 3){

                  var choosenCard = this.rounds[this.rounds.length-1].choosenCard
                  switch(choosenCard.color){
                    case Color.BLACK:
                      partnerColorString = 'black'
                      break
                    case Color.RED:
                      partnerColorString = 'red'
                      break;
                    case Color.YELLOW:
                      partnerColorString = 'blue'
                      break;
                    case Color.GREEN:
                      partnerColorString = 'green'
                      break;
                  }

                  description = "Trump is " + trumpColorString + ". The " + choosenCard.value + " of " + partnerColorString + " is the partner."
                  

                }else{
                  description = "Trump is " + trumpColorString
                }

         
                console.log(round.tricks)
                console.log('tricks')




                this.snackInput(new SnackData(description, 'round_info', null))






                timeout = 10000 

              }else{

                if(this.yourTurn && this.isLeading){
                    setTimeout(() => {
                        this.turn = this.snackBar.open("You Lead", null, {
                          duration: 0,
                        });
                    }, timeout)
                  }

                }



            }

            console.log('bids')
            console.log(round.bids)


              //for rendering the player hands
             this.playerInfo = {
                "playerNames" : this.playerNames,
                "playedCards" : this.playedCards,
                "currentPlayer" : this.currentPlayerIndex,
                "playing" : this.playing,
                "hands" : this.hands,
                "bidWinner" : (this.rounds[this.rounds.length -1].bidWinner-this.index+this.numberOfPlayers)%this.numberOfPlayers,
                "bids" : round.bids,
                "roundState": round.roundState,
                "bidders" : round.bidders
              }



            },timeout)

          }else{
            this.yourTurn = false

            this.snackInput(new SnackData('Would you like to leave the room', "leave_room", null))
          }




        })





      }

        /*
        if(game && game['gameFinished']){
          this.authService.user.subscribe(user => {
            this.socketService.emit("game_done",{game_id: this.game_id, player_id: user.id})
          })

        }
        */

    })

    this.gameService.kitty.subscribe(kitty => {
      this.kitty = kitty
    })


    this.bidSubscription = this.gameService.bidRequest.subscribe((bid) => {

      console.log(bid)

      const dialogRef = this.dialog.open(BidComponent, {
        width: '400px',
        height: '400px',
        data: {
          bid: bid
        }
      });

      dialogRef.afterClosed().subscribe(result => {

        if(this.gameService.bidding){
          this.gameService.bidDialogClosedStillBidding.next(bid)
        }

      });

      this.gameService.bidding = true

    })
  }




  ngOnDestroy(){
    this.bidSubscription.unsubscribe()
  }
  //sort cards in hand
  sort(cards: Card[]){
    cards.sort((a,b) => {
      if(a.value === 1){
          return -1
      }else if(b.value === 1){
          return 1 
      }else{
          return b.value-a.value
      }})
    cards.sort((a,b) => {return a.color-b.color});
    cards.sort((a,b) => {
      if(a.color == Color.UNDETERMINED){
        return 1
      }else{
        return 0
      }
    })

  }




  cardClicked(card: Card){

    console.log('round state')
    console.log(this.gameStage)

    if(this.yourTurn && this.gameStage === RoundState.DISCARDING){

      if(card.kitty){
        card.kitty = false
      this.kitty.splice(this.kitty.indexOf(card),1)
      this.cards.push(card)
      this.sort(this.cards)
      }else{
        if(card.points == 0 || card.points == null || this.throwOutPoints){
          card.kitty = true
          this.cards.splice(this.cards.indexOf(card),1)
          this.kitty.push(card)
        }else{
          this.snackBar.open("🤦‍♀️ You cannot discard pointer cards", null, {
            duration: 2000,
          });
        }

      }
      this.checkForDiscard()
      
    }else if(this.gameStage === RoundState.CHOOSING_TRUMP && this.yourTurn){

        this.authService.user.subscribe(user => {
          this.socketService.emit('play', {player_id: user.id, game_id : this.game_id, play: new Play(MoveType.SET_TRUMP, user.id, card.color)})
        })

        this.trumpSnackBar = null

    }else if(this.gameStage === RoundState.PLAYING && this.yourTurn){

      this.yourTurn = false
      var hasTrickColor = false

      if(this.turn !== null){
        this.turn.dismiss()
      }


      for(let c of this.cards){
        if(c.color === this.currentTrickColor){
          hasTrickColor = true
        }
      }

      if(hasTrickColor && card.color !== this.currentTrickColor){
          this.snackBar.open("You must follow suit if you can", null, {
            duration: 2000,
          });
        
      }else{
          
          this.authService.user.subscribe(user => {
            this.socketService.emit('play', {player_id: user.id, game_id : this.game_id, play: new Play(MoveType.PLAY, user.id, {card: card, index: this.index})})
          })



      }



    }


  }

  checkForDiscard(){
    var kittyLength = this.kitty.length
    if(kittyLength != 5 && this.numberOfPlayers === 4 || kittyLength != 6 && this.numberOfPlayers === 3 || kittyLength != 3 && this.numberOfPlayers === 6 || kittyLength !== 2 && this.numberOfPlayers === 5 ){
      console.log(this.snack)
      if(this.snackMove != null){
       this.snackMove.dismiss()
      }
      return
    }
    for (let card of this.kitty){
      console.log(card)
      if(card.points != 0 && card.points != null && !this.throwOutPoints){
        if(this.snack != null){
          this.snackMove.dismiss()
         }
        return
      }
    }
    //display custom snackBar for discard

    this.snackInput(new SnackData("Would you like to discard?", 'discard', null))




  }


  //call when you needing a little dialog for input (bidding, discarding) Just use normal snackBar for game advice
  snackInput(snackData: SnackData){
    this.snackMove = this.snackBar.openFromComponent(ActionBarComponent, {
      duration:0,
      data: snackData
    })
    //subscribe to get the payload back from snackBar custom component
    this.snackMove.instance.action.subscribe((data: RookAction) => {
      // handle submission here Depends on action taken
      if(data.action === 'bid'){
        this.authService.user.subscribe(user => {
          this.socketService.emit('play', {player_id: user.id, game_id : this.game_id, play: new Play(MoveType.BID, user.id, data.payload)})
        })
      }else if(data.action === 'discard'){
        console.log('discarding')
        this.authService.user.subscribe(user => {
          for(let card of this.kitty){
            card.state = 'flipped'
          }
          this.socketService.emit('play', {player_id: user.id, game_id : this.game_id, play: new Play(MoveType.DISCARD, user.id, {hand: this.cards, kitty: this.kitty})})
        })
      }else if(data.action === 'redeal'){
        if(data.payload){
          this.authService.user.subscribe(user => {
            this.socketService.emit('play', {player_id: user.id, game_id : this.game_id, play: new Play(MoveType.CORRECTING_MISDEAL, user.id, {index: this.index, redeal: data.payload})})
          })
        }

          if(this.gameStage === RoundState.BIDDING && this.yourTurn){

            console.log('this is your turn')
            console.log(this.rounds[this.rounds.length-1].bid)
            this.snackMove.instance.action.unsubscribe()
            this.snackMove.dismiss()

            this.snackInput(new SnackData("", 'bid', this.rounds[this.rounds.length - 1].bid +5))
            return
          }
      }else if(data.action === 'choose_partner'){
        if(data.payload){
            this.authService.user.subscribe(user => {
              console.log(data.payload)
              this.socketService.emit('play', {player_id: user.id, game_id : this.game_id, play: new Play(MoveType.CHOOSE_PARTNER, user.id, {index: this.index, card: data.payload})})
            })
        }
      }else if(data.action === 'round_info' && this.isLeading && this.rounds[this.rounds.length-1].tricks.length === 1){
        if(this.yourTurn && RoundState.PLAYING){
                this.turn = this.snackBar.open("You Lead", null, {
                  duration: 0,
                });
              }
      }else if(data.action === 'leave_room'){
        this.gameService.game.next(null)
        this.index = null
        this.playerNames = []
        this.router.navigate(['/games'])
      }




      this.snackMove.instance.action.unsubscribe()
      this.snackMove.dismiss()
    })

  }
 





}
