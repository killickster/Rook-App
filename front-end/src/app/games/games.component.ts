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
  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    this.games = this.gameService.games
  }

}
