import { Injectable } from '@angular/core';
import {Game} from '../models/game.model'
import {Player} from '../models/player.model'

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  games: Game[] = [new Game(0, 3, [new Player(0,'Micah', 10), new Player(1,'Micahel', 10)]), new Game(0, 3, [new Player(10, 'Dad', 10), new Player(11,'Adri', 10), new Player(12,'Anthony', 10), new Player(13,'Graeme', 10)])]

  constructor() { }

}
