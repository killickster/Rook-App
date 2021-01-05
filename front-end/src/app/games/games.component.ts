import { Component, OnInit } from '@angular/core';
import {Game} from '../models/game.model'
import {GamesService} from '../services/games.service'
import {MatDialog} from '@angular/material/dialog'
import { CreateGameComponent } from './create-game/create-game.component';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Game[]
  selectedGame: Game
  errorMessage: string = ''
  dialogRef: any
  constructor(private gameService: GamesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    
    this.games = this.gameService.games
    this.sortGames()

    this.gameService.gamesChanged.subscribe((games: Game[]) => {
      this.games = games
      this.sortGames()
    })

    this.gameService.errorMessage.subscribe((msg) => {
      this.errorMessage = msg
    })

    this.gameService.fetchGames()
  }


  sortGames(){

    this.games.sort((a,b) => {
      if(a.finished && !b.finished){

        return 1
      }else if(!a.finished && b.finished){
        return -1
      }else{
        return 0
      }
    })
  }

  openDialog(){
    this.dialogRef = this.dialog.open(CreateGameComponent, {
      width: '50%',
      height: '50%'
    })

    this.dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    })
  }



  joinGame(game){
    if(!game.finished){
      this.gameService.joinGame(game)
    }
  }
}
