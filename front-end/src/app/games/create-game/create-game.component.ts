import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Game } from 'src/app/models/game.model';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {

  numberOfPlayers: number = 4
  createdGame = false
  myForm: FormGroup
  errorMessage: string

  constructor(private gameService: GamesService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      name: ['', Validators.required],
      numberOfPlayers: ['', Validators.required]
    })
  }

  enterGame(){

    if(this.myForm.valid){

      const formValue = this.myForm.value

      if(formValue.numberOfPlayers === 4){
        this.gameService.addGame(formValue.numberOfPlayers, formValue.name)
        this.createdGame = true
      }else{
        this.errorMessage = "We only support four player games at the moment"
      }
    }

  }
}
