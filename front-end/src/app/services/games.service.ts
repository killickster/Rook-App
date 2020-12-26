import { HttpClient, HttpClientModule, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import {Game} from '../models/game.model'
import {Player} from '../models/player.model'
import{WebSocketService} from '../web-socket.service'

interface GameResponseData {
  host: string;
  numberOfPlayers: string,
  id: string
}

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  gamesChanged: Subject<Game[]> = new Subject<Game[]>()
  games: Game[] = []
  errorMessage: Subject<string> = new Subject<string>()
  game: BehaviorSubject<Game> = new BehaviorSubject<Game>(null)
  hand: Subject<any> = new Subject<any>()
  bidRequest: Subject<any> = new Subject<any>()
  bidDialogClosedStillBidding: Subject<any> = new Subject<any>()
  bidding: boolean = false
  kitty: Subject<any> = new Subject<any>()


  constructor(private http: HttpClient, private authService: AuthService, private socketService: WebSocketService, private router: Router) {

    this.socketService.listen('new_player').subscribe(data => {
      this.game.subscribe(game => {
        console.log(this.games)
        for(var i = 0 ; i < this.games.length; i++){
          if(this.games[i].id === game.id){
            this.authService.user.subscribe(user => {
              if(user.name !== data['playerName']){
                this.games[i].playerNames.push(data['playerName'])
              }
            })
          }
        }
      })
    })

    this.socketService.listen('game_ready').subscribe(data => {
      console.log(data)

      this.game.subscribe(game => {
        this.router.navigate(['/gameroom/', game.id])
          this.authService.user.subscribe((user) =>{
            this.socketService.emit('get_cards', {player_id: user.id, game_id : game.id})
          })
      })

    })


    this.socketService.listen('cards').subscribe(data => {
      this.hand.next(data['hand'])

    })

    this.socketService.listen('bid_request').subscribe(data => {
     console.log(data) 
      this.bidRequest.next(80)      //Start bid at 80
     console.log('bid request') 
     this.bidding = true
    })


    this.socketService.listen('bid').subscribe(data => {
      const nextBidder = data['nextBidder']
      const bid = data['bid']
      const player = data['player']
      console.log(bid)
      console.log(player)
      this.authService.user.subscribe(user=> {
        if(user.id === nextBidder){
          this.bidRequest.next(bid)
          console.log(user.id)
        }
      })
    })

    this.socketService.listen('bid_completed').subscribe(data => {
      console.log('bid completed')
      const winnerId = data["id"]

      this.authService.user.subscribe(user => {
        if(user.id === winnerId){
          console.log('you are the winner')
          this.game.subscribe(game => {
            this.socketService.emit('get_kitty', {player_id: user.id, game_id : game.id})
          })

        }
      })
    })


    this.socketService.listen('kitty').subscribe(data => {
      this.kitty.next(data['cards'])
    })

   }


   submitBid(bid){

    this.bidding = false

      this.game.subscribe(game => {
          this.authService.user.subscribe((user) =>{
            this.socketService.emit('bid_submit', {player_id: user.id, game_id : game.id, bid: bid})
          })
      })

   }


  fetchGames(){

    return this.http.get<Game[]>('http://localhost:3000/api/games').pipe(catchError(this.handleErrors), tap(games => {
      this.games = games
    })).subscribe(resData => {
      this.gamesChanged.next(this.games)
    }, error => {
      this.errorMessage.next(error)
    })

  }

  addGame(numberOfPlayers: number){
    return this.http.post<Game>('http://localhost:3000/api/games/game', {numberOfPlayers: numberOfPlayers}).pipe(catchError(this.handleErrors), tap(game => {
      this.games.push(game)
      this.game.next(game)

      this.authService.user.subscribe((user) =>{
        this.socketService.emit('initalize_game', {player_id: user.id, game_id : game.id})
      })
    })).subscribe(resData => {
      this.gamesChanged.next(this.games)

    }, error => {

      this.errorMessage.next(error)
    })




  }

  joinGame(game: Game){

    this.game.next(game)

    return this.http.put<Game>('http://localhost:3000/api/games/game', {game_id: game.id}).pipe(catchError(this.handleErrors), tap(changedGame => {

    for(var i = 0 ; i < this.games.length; i++){
      if(this.games[i].id === changedGame.id){
        this.games[i] = changedGame
      }
    }

    this.gamesChanged.next(this.games)

      this.authService.user.subscribe((user) =>{
        console.log(user)
        this.socketService.emit('join_game', {player_id: user.id, game_id : changedGame.id})
      })

    })).subscribe( changedGame => {

      console.log(changedGame)

    }, error => {

      this.errorMessage.next(error)
    })
  }



  handleErrors(errorRes: HttpErrorResponse){
    let errorMessage = errorRes.error

    let message = 'an unkown error has occured'

    console.log(errorRes)

    switch(errorMessage){
      case 'ALREADY_IN_GAME':
        message ="You are already in this game"
        break
      case 'HOSTING_ALREADY':
        message = 'You are already hosting a game'
        break;
      case 'INVALID_TOKEN':
        message = 'your token is invalid'
        break
      case 'NO_TOKEN':
        message = 'you have no token'
        break

    }
    return throwError(message)

  }

}
