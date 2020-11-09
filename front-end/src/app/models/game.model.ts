import {Player} from './player.model'

export class Game{

    constructor(public id: number, public numberOfPlayers: number, public players: Player[]){

    }
}