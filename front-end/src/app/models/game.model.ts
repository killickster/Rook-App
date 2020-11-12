import {Player} from './player.model'

export class Game{

    constructor(public hostName: string ,public id: string, public numberOfPlayers: number, public playersNames: string[]){

    }
}