import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {

  numberOfPlayers: number = 3
  createdGame = false

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
  }

  increment(){
    if(this.numberOfPlayers <= 5){
      this.numberOfPlayers++
    }

  }

  decrement(){
    if(this.numberOfPlayers >= 4){
      this.numberOfPlayers--
    }

  }

  enterGame(){
    this.gameService.addGame(this.numberOfPlayers)
    this.createdGame = true
  }
}
