import {Player} from './player.model'

export class Game{

    public bid: number
    public bidder: any
    public nextBidder: any
    public finished: any
    constructor(public hostName: string ,public id: string, public numberOfPlayers: number, public playerNames: string[]){
        this.bid = 75
        this.bidder = null
        this.nextBidder = null

    }
}