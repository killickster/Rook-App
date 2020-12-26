import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscribable, Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Game } from '../models/game.model';
import { GamesService } from '../services/games.service';
import { WebSocketService } from '../web-socket.service';
import { BidComponent } from './bid/bid.component';

@Component({
  selector: 'app-gameroom',
  templateUrl: './gameroom.component.html',
  styleUrls: ['./gameroom.component.css']
})
export class GameroomComponent implements OnInit {

  cards = [{color: "yellow", number: 13},{color: "green", number: 1, points: 15},{color: "black", number: 12},{color: "red", number: 10, points: 10},{color: "black", number: 5, points: 5},{color: "black", number: 8},{color: "yellow", number: 7}]
  bidForm: FormGroup
  game: Game
  bidSubscription: Subscription
  kitty = null


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
