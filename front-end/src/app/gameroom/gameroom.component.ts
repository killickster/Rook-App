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
import {Card} from '../services/models/card.model';
import {RoundState} from '../services/models/round-stage.model';
import {Color} from '../services/models/color.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-gameroom',
  templateUrl: './gameroom.component.html',
  styleUrls: ['./gameroom.component.css']
})
export class GameroomComponent implements OnInit {
  exchange = false;
  cards: Card[]
  //[new Card('yellow', 10, 10, "face", false, false), new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false), new Card('yellow', 11, null, "face", false, false)]
  yourTurn: boolean = false
  gameStage: RoundState
  bidForm: FormGroup
  game: Game
  bidSubscription: Subscription
  kitty: Card[]
  //[{color: 'green', value: 1, points: 15, state: "face", exchange: false, kitty: true}, {color: 'yellow', value: 1, points: null, state: "face", exchange: false, kitty: true}, {color: 'birdy', value: 0, points: 20, state: "face", exchange: false, kitty: true}, {color: 'unknown', value: null, points: null, state: "flipped", exchange: false, kitty: true}, {color: 'unknown', value: null, points: null, state: "flipped", exchange: false, kitty: true}]


  constructor(private snackBar: MatSnackBar, private gameService: GamesService, private dialog: MatDialog) { }


  ngOnInit(): void {

    this.gameService.gameState.subscribe(game => {
      if(game){

        this.gameService.yourIndex.subscribe(index => {
          
          
          var round = game['rounds'][game['currentRoundIndex']]

          this.cards = round.hands[index] 
          this.sort(this.cards) 

          this.gameStage = game['rounds'][game['currentRoundIndex']].roundState

          this.yourTurn = game['currentPlayer'] === index ? true : false

          this.kitty = round.kitty 




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



  //exchange cards with kitty
  /*
  cardClicked(card: Card){
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
        this.snackBar.open("🤦‍♀️ You cannot discard pointer cards", "Dance", {
          duration: 2000,
        });
      }

    }

  }
*/


}
