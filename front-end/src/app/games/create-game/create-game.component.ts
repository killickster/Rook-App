import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {

  numberOfPlayers: number = 0

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
  }

  increment(){
    this.numberOfPlayers++
  }

  decrement(){
    this.numberOfPlayers++
  }

  enterGame(){
    this.gameService.addGame(this.numberOfPlayers)
  }
}
