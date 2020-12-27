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

  cards: Card[] = [new Card('yellow', 10, 10, "face"), new Card('yellow', 10, 10, "face"),new Card('yellow', 10, 10, "face"),new Card('yellow', 10, 10, "face"),new Card('yellow', 10, 10, "face"),new Card('yellow', 10, 10, "face"),new Card('yellow', 10, 10, "face"),new Card('yellow', 10, 10, "face"),new Card('yellow', 10, 10, "face"),new Card('yellow', 10, 10, "face"),new Card('yellow', 10, 10, "face"),new Card('yellow', 10, 10, "face"),new Card('yellow', 10, 10, "face"), new Card('yellow', 11, null, "face")]
  bidForm: FormGroup
  game: Game
  bidSubscription: Subscription
  kitty: Card[] = [{color: 'unknown', value: null, points: null, state: "flipped"}, {color: 'unknown', value: null, points: null, state: "flipped"}, {color: 'unknown', value: null, points: null, state: "flipped"}, {color: 'unknown', value: null, points: null, state: "flipped"}, {color: 'unknown', value: null, points: null, state: "flipped"}]


  constructor(private gameService: GamesService, private dialog: MatDialog) { }


  ngOnInit(): void {

    this.gameService.hand.subscribe(hand => {
      this.cards = hand
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

        console.log('The dialog was closed');
      });

      this.gameService.bidding = true

    })
  }

  ngOnDestroy(){
    this.bidSubscription.unsubscribe()
  }

}
