import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map} from 'rxjs/operators';
import {Game} from '../models/game.model'
import {Player} from '../models/player.model'

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

  constructor(private http: HttpClient) { }


  fetchGames(){

    return this.http.get('http://localhost:3000/api/games').subscribe(games => {

      this.games = games['allGames']
      console.log(this.games)
      this.gamesChanged.next(this.games)
    })
  }

  addGame(numberOfPlayers: number){
    return this.http.post<Game>('http://localhost:3000/api/games/game', {numberOfPlayers: numberOfPlayers}).subscribe(game =>{
      console.log(game)
      console.log((this.games))
      this.games.push((new Game(game.hostName, game.id, game.numberOfPlayers, [game.hostName])))
      this.gamesChanged.next(this.games)
    })
  }

}
