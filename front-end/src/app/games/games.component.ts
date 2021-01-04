import { Component, OnInit } from '@angular/core';
import {Game} from '../models/game.model'
import {GamesService} from '../services/games.service'

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Game[]
  selectedGame: Game
  errorMessage: string = ''
  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    
    this.games = this.gameService.games

    this.gameService.game.subscribe((game) => {
      this.selectedGame
    })

    this.gameService.gamesChanged.subscribe((games: Game[]) => {
      this.games = games
    })

    this.gameService.errorMessage.subscribe((msg) => {
      this.errorMessage = msg
    })

    this.gameService.fetchGames()
  }


  joinGame(game){
    if(!game.finished){
      this.gameService.joinGame(game)
    }

  }
}
