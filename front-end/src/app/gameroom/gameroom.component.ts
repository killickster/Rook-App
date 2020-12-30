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
import {Card} from './card.model';
import {MatSnackBar, MatSnackBarRef, MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { SnackData} from './snack-data';
import { RookAction } from './rook-action';

@Component({
  selector: 'app-gameroom',
  templateUrl: './gameroom.component.html',
  styleUrls: ['./gameroom.component.css']
})
export class GameroomComponent implements OnInit {
  exchange = false;
  cards: Card[] = [new Card('yellow', 10, 10, "face", false, false), new Card('yellow', 9, 0, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('black', 4, 0, "face", false, false),new Card('yellow', 3, 0, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('red', 8, 0, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false), new Card('yellow', 11, null, "face", false, false)]
  snack: MatSnackBarRef<any> = null;
  snackMove: MatSnackBarRef<any> = null;
  bidForm: FormGroup
  game: Game
  bidSubscription: Subscription
  kitty: Card[] = [{color: 'green', value: 1, points: 15, state: "face", exchange: false, kitty: true}, {color: 'yellow', value: 1, points: null, state: "face", exchange: false, kitty: true}, {color: 'birdy', value: 0, points: 20, state: "face", exchange: false, kitty: true}, {color: 'unknown', value: null, points: null, state: "flipped", exchange: false, kitty: true}, {color: 'unknown', value: null, points: null, state: "flipped", exchange: false, kitty: true}]


  constructor(private snackBar: MatSnackBar, private gameService: GamesService, private dialog: MatDialog) { }


  ngOnInit(): void {
    this.sort(this.cards)

    this.gameService.hand.subscribe(hand => {
      
      this.cards = hand
      this.sort(this.cards)

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
    cards.sort((a,b) => a.color.localeCompare(b.color));
    cards.sort((a,b) => {
      if(a.color == "blank"){
        return 1
      }else if(b.color == "birdy"){
        return -1
      }else{
        return 0
      }
    })

  }



  //exchange cards with kitty
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
        this.snackBar.open("🤦‍♀️ You cannot discard pointer cards", null, {
          duration: 2000,
        });
      }

    }
    this.checkForDiscard()

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
    this.snackInput(new SnackData("Kitty ready to discard", 'bid'))

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
