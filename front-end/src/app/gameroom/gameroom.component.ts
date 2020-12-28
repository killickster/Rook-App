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
import {Card} from './card.model'

@Component({
  selector: 'app-gameroom',
  templateUrl: './gameroom.component.html',
  styleUrls: ['./gameroom.component.css']
})
export class GameroomComponent implements OnInit {
  exchange = false;
  cards: Card[] = [new Card('yellow', 10, 10, "face", false, false), new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false),new Card('yellow', 10, 10, "face", false, false), new Card('yellow', 11, null, "face", false, false)]
  bidForm: FormGroup
  game: Game
  bidSubscription: Subscription
  kitty: Card[] = [{color: 'unknown', value: null, points: null, state: "face", exchange: false, kitty: true}, {color: 'unknown', value: null, points: null, state: "face", exchange: false, kitty: true}, {color: 'unknown', value: null, points: null, state: "flipped", exchange: false, kitty: true}, {color: 'unknown', value: null, points: null, state: "flipped", exchange: false, kitty: true}, {color: 'unknown', value: null, points: null, state: "flipped", exchange: false, kitty: true}]


  constructor(private gameService: GamesService, private dialog: MatDialog) { }


  ngOnInit(): void {

    this.gameService.hand.subscribe(hand => {

      this.cards = this.sortHand(hand)

      
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
    cards.sort((a,b) => a.value - b.value);
    cards.sort((a,b) => a.color.localeCompare(b.color));
  }



  //exchange cards with kitty
  cardClicked(card: Card){
    if(card.kitty){
      card.kitty = false
     this.kitty.splice(this.kitty.indexOf(card),1)
     this.cards.push(card)
     this.sort(this.cards)
    }else{
      card.kitty = true
      this.cards.splice(this.cards.indexOf(card),1)
      this.kitty.push(card)

    }

  }



  sortHand(array: Card[]){

    var hand = []

    var red = []
    var green = []
    var yellow = []
    var black = []

    var rook = null

    for(let card of array){

        if(card.color === 'red'){
            red.push(card)
        }else if(card.color === 'green'){
            green.push(card)
        }else if(card.color === 'yellow'){
            yellow.push(card)
        }else if(card.color === 'black'){
            black.push(card)
        }else if(card.color === 'blank'){
            rook = card
        }
    }


    red = this.sort(red)
    black = this.sort(black)
    green= this.sort(green)
    yellow = this.sort(yellow)

    hand = red.concat(black).concat(green).concat(yellow)

    if(rook){
        hand.push(rook)
    }

    return hand
  }


  sort(cards){
    return cards.sort((a,b) => {
        if(a.value === 1){
            return -1
        }else if(b.value === 1){
            return 1 
        }else{
            return b.value-a.value
        }
    })
}



}
