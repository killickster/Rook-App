import {MoveType} from './move-type.model'

export class Play {
    constructor(public moveType: MoveType, public player_id: string ,public payload: any){}
}