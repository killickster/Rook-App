import { HttpClient, HttpClientModule, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import {Game} from '../models/game.model'
import {Player} from '../models/player.model'
import{WebSocketService} from '../web-socket.service'
import {Card} from '../services/models/card.model'

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
  hand: Subject<Card[]> = new Subject<Card[]>()
  bidRequest: Subject<any> = new Subject<any>()
  bidDialogClosedStillBidding: Subject<any> = new Subject<any>()
  bidding: boolean = false
  kitty: Subject<any> = new Subject<any>()
  yourIndex: BehaviorSubject<number> = new BehaviorSubject<number>(null) 
  gameState: BehaviorSubject<any> = new BehaviorSubject<any>(null)
  


  constructor(private http: HttpClient, private authService: AuthService, private socketService: WebSocketService, private router: Router) {


    this.socketService.listen('updated_game_state').subscribe(data => {

      this.gameState.next(data)
    })

     this.gameState.subscribe(data => {

      if(data){

        this.yourIndex.subscribe(index => {
          if(index === null){
            console.log(data)
            var players = data['players']
                this.authService.user.subscribe(user => {
                  for(let i = 0 ; i < players.length; i++){
                    if(players[i] !== null && players[i].player_id === user.id){
                      this.yourIndex.next(i)
                    }
                  }
              })
          }
        })
      }


    })


    this.game.subscribe(game => {
      console.log('joined ame')
      if(game ){
        this.router.navigate(['/gameroom/', game.id])
      }
    })

    this.gamesChanged.subscribe(games => {
      this.authService.user.subscribe(user => {

        for(let game of games){
          console.log(game['playerIds'])
          for(let id of game['playerIds']){

            if( id === user.id){

              this.socketService.emit('get_game_state', {player_id: user.id, game_id: game.id})

            }
          }
        }
      })

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
