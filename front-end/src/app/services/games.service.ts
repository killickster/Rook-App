import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Game} from '../models/game.model'
import {Player} from '../models/player.model'

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  games: Game[] = [new Game('Bob',0, 4, [new Player(0,'Micah', 10), new Player(1,'Micahel', 10)]), new Game('John',1, 4, [new Player(10, 'Dad', 10), new Player(11,'Adri', 10), new Player(12,'Anthony', 10), new Player(13,'Graeme', 10)])]

  constructor(private http: HttpClient) { }


  fetchGames(){

    return this.http.get('http://localhost:3000/api/games').subscribe(games => {
      console.log(games)
    })
  }

  addGame(numberOfPlayers: number){

    return this.http.post('http://localhost:3000/api/games/game', {numberOfPlayers: numberOfPlayers}).subscribe(game => {
      console.log(game)
    })


  }

}
