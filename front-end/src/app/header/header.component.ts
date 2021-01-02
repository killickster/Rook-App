import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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


  constructor(private authService: AuthService) { }


  ngOnInit(): void {


    this.loggedInSubscription = this.authService.user.subscribe(user => {
      if(user){
        this.authenticated = true
      }

    })

  }

  ngOnDestroy(){
    this.loggedInSubscription.unsubscribe()
  }



  logout(){
    this.authService.logout()
  }

}
