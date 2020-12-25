import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{

  collapsed = true 
  loggedInSubscription: Subscription
  authenticated: boolean = false
  biddingBoxRequired = false
  bid = null

  constructor(private authService: AuthService, private gameService: GamesService) { }


  ngOnInit(): void {

    this.gameService.bidDialogClosedStillBidding.subscribe(bid => {
      
      if(bid){
        this.biddingBoxRequired = true
        this.bid = bid
      }

    })

    /*
    this.gameService.bidRequest.subscribe((bid) => {
      if(bid){
        this.bidding = true
        this.bid = bid
      }
    })
    */

    this.loggedInSubscription = this.authService.user.subscribe(user => {
      if(user){
        this.authenticated = true
      }

    })

  }

  ngOnDestroy(){
    this.loggedInSubscription.unsubscribe()
  }

  openModel(){
    this.gameService.bidRequest.next(this.bid)
    this.biddingBoxRequired = false
  }


  logout(){
    this.authService.logout()
  }

}
