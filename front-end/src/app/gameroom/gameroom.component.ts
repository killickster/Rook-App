import { supportsPassiveEventListeners } from '@angular/cdk/platform';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscribable, Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
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


@Component({
  selector: 'app-gameroom',
  templateUrl: './gameroom.component.html',
  styleUrls: ['./gameroom.component.css']
})
export class GameroomComponent implements OnInit {
  snack: MatSnackBarRef<any> = null;
  snackMove: MatSnackBarRef<any> = null;
  cards: Card[] = [new Card(Color.BLACK, 1, 15, 15, "face", false), new Card(Color.RED, 3,0, 3, "face", false),new Card(Color.RED, 3,0, 3, "face", false),new Card(Color.RED, 3,0, 3, "face", false),new Card(Color.RED, 3,0, 3, "face", false),new Card(Color.RED, 3,0, 3, "face", false),new Card(Color.RED, 3,0, 3, "face", false),new Card(Color.RED, 3,0, 3, "face", false),new Card(Color.RED, 3,0, 3, "face", false),new Card(Color.RED, 3,0, 3, "face", false),new Card(Color.RED, 3,0, 3, "face", false),new Card(Color.RED, 3,0, 3, "face", false),new Card(Color.RED, 3,0, 3, "face", false),new Card(Color.RED, 3,0, 3, "face", false),]
  yourTurn: boolean = false
  gameStage: RoundState
  bidForm: FormGroup
  game: Game
  bidSubscription: Subscription
  kitty: Card[] = [new Card(Color.GREEN, 4,0, 4, "face", true),new Card(Color.GREEN, 4,0, 4, "face", true),new Card(Color.GREEN, 4,0, 4, "face", true),new Card(Color.GREEN, 4,0, 4, "face", true),new Card(Color.GREEN, 4,0, 4, "face", true),]
  playerNames = [null, null, null, null]
  hands: Card[][] = [null, null, null, null]
  //[{color: 'green', value: 1, points: 15, state: "face", exchange: false, kitty: true}, {color: 'yellow', value: 1, points: null, state: "face", exchange: false, kitty: true}, {color: 'birdy', value: 0, points: 20, state: "face", exchange: false, kitty: true}, {color: 'unknown', value: null, points: null, state: "flipped", exchange: false, kitty: true}, {color: 'unknown', value: null, points: null, state: "flipped", exchange: false, kitty: true}]


  constructor(private snackBar: MatSnackBar, private gameService: GamesService, private dialog: MatDialog) { }


  ngOnInit(): void {

    this.gameService.gameState.subscribe(game => {
      if(game){

        this.gameService.yourIndex.subscribe(index => {
          
          
          var round = game['rounds'][game['currentRoundIndex']]

          this.gameStage = round.roundState

          this.yourTurn = game['currentPlayer'] === index ? true : false

          this.kitty = round.kitty 

          var players = game.players

          var numberOfPlayers = players.length

          for(var i = 0; i < players.length; i++){
            if(players[(i+index)%numberOfPlayers]){
              
              this.playerNames[i] = players[(i+index)%numberOfPlayers].player_name

            }

            this.hands[i] = (round.hands[(i+index)%numberOfPlayers])


          }

          this.cards = this.hands[0] 
          this.sort(this.cards) 

          if(this.gameStage === RoundState.BIDDING && this.yourTurn){
            this.snackInput(new SnackData("", 'bid', round.bid +5))
          }else if(this.gameStage === RoundState.DISCARDING && this.yourTurn){

          }




        })
      }
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

    if(this.yourTurn && this.gameStage === RoundState.DISCARDING){

      if(card.kitty){
        card.kitty = false
      this.kitty.splice(this.kitty.indexOf(card),1)
      this.cards.push(card)
      this.sort(this.cards)
      }else{
        if(card.points == 0 || card.points == null){
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
      
    }


  }

  checkForDiscard(){
    if(this.kitty.length != 5){
      console.log(this.snack)
      if(this.snackMove != null){
       this.snackMove.dismiss()
      }
      return
    }
    for (let card of this.kitty){
      console.log(card)
      if(card.points != 0 && card.points != null){
        if(this.snack != null){
          this.snackMove.dismiss()
         }
        return
      }
    }
    //display custom snackBar for discard


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
      alert(data.action + " : "+data.payload)
      this.snackMove.instance.action.unsubscribe()
      this.snackMove.dismiss()
    })

  }
 





}
