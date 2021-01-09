import { resolve } from "path"

var {Deck, shuffleAndDeal, Card, Color} = require('./Deck')
const GameSchema = require('../../model/Game')
const User =require('../../model/User')




export class Game{

    public numberOfPlayersJoined: number 
    public players: any[]
    public rounds: Round[]
    public currentRoundIndex: number
    public currentPlayer: number | null
    public gameFinished = false
    public team1Indicies: number[] = []           //Used only for 4 man
    public team2Indicies: number[] = []           //Used only for 4 man

    constructor(public game_id: string, public numberOfPlayers: number){
        this.numberOfPlayersJoined = 0
        this.currentPlayer = null

        this.players = []

        for(var i = 0; i < numberOfPlayers ; i++){
            this.players.push(null)
        }

        this.rounds = []
        this.rounds.push(new Round(numberOfPlayers))
        this.currentRoundIndex = 0
        this.rounds[this.currentRoundIndex].setFirstBidder(0)
    }

    addPlayer(player: Player){
        if(this.numberOfPlayers === this.numberOfPlayersJoined){
            throw("GAME_FULL")
        }

        this.numberOfPlayersJoined++

        var playerIsAssigned = false

        while(!playerIsAssigned){
            var index: number= Math.floor(Math.random() * this.numberOfPlayers)
            
            if(this.players[index] === null){
                this.players[index] = player
                playerIsAssigned = true

                if(this.numberOfPlayersJoined === this.numberOfPlayers){

                    if(this.numberOfPlayers === 4){

                        this.team1Indicies.push(0)
                        this.team1Indicies.push(2)
                        this.team1Indicies.push(1)
                        this.team1Indicies.push(3)
                    }


                    this.rounds[this.currentRoundIndex].roundState = RoundState.BIDDING

                    this.currentPlayer = 0
                }
                return index
            }
        }

        //Assign teammates


    }


    move(play: Play){


        return new Promise((resolve, reject) => {

            console.log('players')
            console.log(this.players)

        if(play.moveType === MoveType.CORRECTING_MISDEAL){
            if(this.rounds[this.currentRoundIndex].hasBid[play.payload.index] === false){
                this.currentPlayer = this.rounds[this.currentRoundIndex].redeal(play.payload.index)
                console.log('correcting misdeal')
                console.log(this.currentPlayer)
            }else{
                this.rounds[this.currentRoundIndex].misdeals = this.rounds[this.currentRoundIndex].misdeals.filter((index) => {
                    return index !== play.payload.index
                })
            }


            return resolve(this.currentPlayer)
        }

        if(!this.validateMove(play)){
            throw('INVALID_MOVE')
        }

        switch(play.moveType){
            case MoveType.ADD_PLAYER:
                console.log('add player')
                return resolve(this.addPlayer(play.payload))
            case MoveType.BID:
                console.log("current player before")
                console.log(this.currentPlayer)
                this.currentPlayer = this.rounds[this.currentRoundIndex].submitBid(play.payload)
                console.log("current player")
                console.log(this.currentPlayer)
                return resolve(this.currentPlayer)
            case MoveType.DISCARD:
                this.currentPlayer = this.rounds[this.currentRoundIndex].setNewHand(play.payload)
                return resolve(this.getGameStateFor(play.player_id))
            case MoveType.SET_TRUMP:
                this.currentPlayer = this.rounds[this.currentRoundIndex].selectTrump(play.payload)
                return resolve(this.getGameStateFor(play.player_id))
            case MoveType.CHOOSE_PARTNER:
                this.currentPlayer = this.rounds[this.currentRoundIndex].setTeams(play.payload);
                return resolve(this.currentPlayer)
            case MoveType.PLAY:
                var index = this.rounds[this.currentRoundIndex].submitPlay(play.payload)
                if(this.currentPlayer !== null && index === false){
                    this.currentPlayer = (this.currentPlayer+1)%this.numberOfPlayers
                }else if(index !== null && index !== false){
                    this.currentPlayer = index
                }

                var roundDone = true

                for(let hand of this.rounds[this.currentRoundIndex].hands){
                    if(hand.length > 0){
                        roundDone = false
                    }
                }

                if(roundDone){
                    console.log('round is done')
                    var points = this.rounds[this.currentRoundIndex].calculatePoints()
                    var team1Points = 0
                    var team2Points = 0
                    var team1Indicies = this.rounds[this.currentRoundIndex].team1Indicies
                    var team2Indicies = this.rounds[this.currentRoundIndex].team2Indicies

                    for(var i = 0; i < points.length; i++){

                        if(team1Indicies.includes(i)){
                            team1Points += points[i]
                        }else if(team2Indicies.includes(i)){
                            team2Points += points[i]
                        }
                    }

                        var bid = this.rounds[this.currentRoundIndex].bid
                        var bidder = this.rounds[this.currentRoundIndex].bidders[0]

                        if(team1Indicies.includes(bidder)){
                           if(team1Points < bid){
                            team1Points = -bid 
                           }
                        }else if(team2Indicies.includes(bidder)){
                            if(team2Points < bid){
                                team2Points = -bid
                            }
                        }

                        for(var i = 0; i < this.players.length; i++){
                            if(team1Indicies.includes(i)){
                                this.rounds[this.currentRoundIndex].points[i] = team1Points
                                this.players[i].addPoints(team1Points)
                            }else if(team2Indicies.includes(i)){
                                this.rounds[this.currentRoundIndex].points[i] = team2Points
                                this.players[i].addPoints(team2Points)
                            }
                        }

                        




                        for(var i = 0; i < this.players.length; i++){

                            if(this.players[i].points > 500){
                                this.gameFinished = true

                                return resolve('finished')
                            }
                        }

                

                    if(this.currentPlayer !== null){
                        this.rounds.push(new Round(this.numberOfPlayers))

                        if(this.numberOfPlayers === 4){
                            this.rounds[this.currentRoundIndex].team1Indicies = this.team1Indicies
                            this.rounds[this.currentRoundIndex].team2Indicies = this.team2Indicies
                        }

                        this.currentRoundIndex++
                        this.currentPlayer = this.rounds.length % this.numberOfPlayers
                        this.rounds[this.currentRoundIndex].setFirstBidder(this.currentPlayer)
                        this.rounds[this.currentRoundIndex].roundState = RoundState.BIDDING

                    }

                }

                return resolve(this.getGameStateFor(play.player_id))

        }
    })

    }

    validateMove(play: Play): boolean{

        if(this.currentPlayer !== null && this.players[this.currentPlayer].player_id !== play.player_id){
            return false
        }else{
            return true
        }

    }

    getGameStateFor(id: string){
        var index: number | null = null

        for(var i = 0; i< this.players.length; i++){
            if(this.players[i] !== null && this.players[i].player_id === id){
                index = i
                console.log(this.players[i].player_id)
            }
        }

        if(index !== null){
            var clone = JSON.parse(JSON.stringify(this))

            var round = clone.rounds[this.currentRoundIndex]

            var cards = round.hands[index]

            for(let card of cards){
                card.state = 'face'
            }

            if(round.roundState === RoundState.DISCARDING && this.currentPlayer != null && this.players[this.currentPlayer].player_id === id){
                for(let card of round.kitty){
                    card.state = 'face'
                }
            }

            return clone
        }else{
            return false
        }


    }


}


export enum RoundState {WAITING_ON_PLAYERS, DISCARDING, CHOOSING_TRUMP ,BIDDING, LEADING, PLAYING, CHOOSING_PARTNER,DONE}

class Round{

    public kitty: typeof Card[] | null
    public hands: typeof Card[][]
    public roundState: RoundState
    public bid: number
    public bidder: number = 0
    public bidWinner: number | null = null
    public bidders: number[]
    public trump: typeof Color
    public tricks: Trick[]
    public deck: typeof Deck
    public points: number[] = []
    public misdeals: number[]
    public hasBid: boolean[] = []
    public misdealsClaimed: number[] = []
    public starter: any = null
    public bids: number[]= []
    public team1Indicies: number[] = []
    public team2Indicies: number[] = []
    public choosenCard: any = null

    constructor(private numberOfPlayers: number){
        this.bid = 75
        var numberInKitty = 0
        if(this.numberOfPlayers === 3){
            numberInKitty = 6
        }else if(this.numberOfPlayers === 4){
            numberInKitty = 5
        }else if(this.numberOfPlayers === 5){
            numberInKitty = 2
        }else{
            numberInKitty = 3
        }

        const {kitty, hands, misdeals} = shuffleAndDeal(new Deck(), numberInKitty, this.numberOfPlayers)  //5 in kitty for 4 man

        for(let i = 0; i < this.numberOfPlayers; i++){
            this.points.push(0)
            this.bids.push(0)
            this.hasBid.push(false)
        }

        this.kitty = kitty
        this.hands = hands 
        this.misdeals = misdeals

        this.roundState = RoundState.WAITING_ON_PLAYERS
        this.bidders = []
        for(var i = 0; i < this.numberOfPlayers; i++){
            this.bidders.push(i)
        }
        this.trump = Color.UNDETERMINED
        this.tricks = []
    }

    setFirstBidder(currentPlayer: number){
        this.bidder = currentPlayer
        this.starter = currentPlayer
    }

    redeal(index: number){
        var numberInKitty = 0
        if(this.numberOfPlayers === 3){
            numberInKitty = 6
        }else if(this.numberOfPlayers === 4){
            numberInKitty = 5
        }else if(this.numberOfPlayers === 5){
            numberInKitty = 2
        }else{
            numberInKitty = 3
        }
        const {kitty, hands, misdeals} = shuffleAndDeal(new Deck(), numberInKitty, this.numberOfPlayers)  //5 in kitty for 4 man
        this.kitty = kitty
        for(let i = 0; i< this.numberOfPlayers; i++){
            this.hasBid.push(false)
        }
        this.bidders = []
        for(var i = 0; i < this.numberOfPlayers; i++){
            this.bidders.push(i)
        }
        this.bid = 75
        
        this.hands = hands
        this.misdeals = misdeals
        this.misdealsClaimed.push(index)
        this.bidWinner = null
        this.bidder = this.starter
        return this.starter
    }

    setTeams(payload: any){
        const {index, card} = payload
        this.choosenCard = card

        var chosenIndex = null
        for(var i = 0; i < this.hands.length; i++){
            for(var c of this.hands[i]){
                if(c.number === card.value && c.color === card.color){
                    chosenIndex = i
                }
            }
        }

        this.team1Indicies.push(index)

        if(chosenIndex !== null && !this.team1Indicies.includes(chosenIndex)){
            this.team1Indicies.push(chosenIndex)
        }


        for(let i = 0; i < this.numberOfPlayers; i++){
            if(i !== index && chosenIndex !== i){
                this.team2Indicies.push(i)
            }
        }

        this.roundState = RoundState.PLAYING

        return (index+1)%this.numberOfPlayers

    }

    //Required for 3,5,6 player to set teams after for individual rounds


    submitBid(bid: number){

        if(bid >= this.bid + 5){
            this.bid = bid
            this.hasBid[this.bidders[this.bidder]] = true
            this.bids[this.bidders[this.bidder]] = bid
            this.bidWinner = this.bidders[this.bidder]
            
            this.bidder = (this.bidder+1)%this.bidders.length
        }else{
            this.bids[this.bidders[this.bidder]] = 0
            this.bidders = this.bidders.filter((el) => {
                return el !== this.bidders[this.bidder]
            })

            this.bidder = (this.bidder)%this.bidders.length
        }

        if(this.bidders.length === 1){
            this.roundState = RoundState.DISCARDING
        }

        return this.bidders[this.bidder]
    }


    setNewHand(cards: typeof Card[]){

        for(let card of cards){
            card.state = 'flipped'
        }
        var indexOfBidWinner = this.bidders[0]
        this.hands[indexOfBidWinner]  = cards
        this.kitty = null
        this.roundState = RoundState.CHOOSING_TRUMP
        return indexOfBidWinner
    }

    selectTrump(color: typeof Color){
        var indexOfBidWinner = this.bidders[0]
        this.trump = color
        if(this.numberOfPlayers === 4){
            this.roundState = RoundState.PLAYING
        }else{
            this.roundState = RoundState.CHOOSING_PARTNER
        }

        this.tricks.push(new Trick(this.trump, this.numberOfPlayers))

        for(let hand of this.hands){
            for(let card of hand){
                if(card.color === Color.UNDETERMINED){
                    card.color = color
                }
            }
        }

        if(this.numberOfPlayers === 4){
            return (indexOfBidWinner + 1) % this.numberOfPlayers
        }else{
            return indexOfBidWinner
        }

    }

    calculatePoints(){

        var points = []
        for(let i = 0; i < this.numberOfPlayers; i++){
            points.push(0)
        }
        for(let trick of this.tricks){
            for(let card of trick.cards){
                if(trick.winnerIndex !== null){
                    points[trick.winnerIndex] += card.points
                }
            }
        }

        return points
    }

    submitPlay(play: any){
        var card =  play.card
        var index = play.index


        if(this.tricks.length > 0){

            var trick = this.tricks[this.tricks.length-1]

            this.hands[index] = this.hands[index].filter(c => {
                return !(c.color === card.color && c.value === card.value)
            })

            if(trick.color === null){
                trick.initalize(card, index)
            }else{
                var trickDone = this.tricks[this.tricks.length-1].submitCard(card, index)

                if(trickDone !== false){
                    var winner = this.tricks[this.tricks.length-1].winnerIndex
                    this.tricks.push(new Trick(this.trump, this.numberOfPlayers))
                    console.log('winner')
                    console.log(winner)
                    return winner
                }

            }

        }

        return false
    }




}



class Trick{

    public cards: typeof Card | null[] = []
    public color: typeof Color | null = null
    public winnerIndex: number | null = null

    constructor(public trumpColor: typeof Color, numberOfPlayers: number){

        for(var i = 0; i < numberOfPlayers; i++){
            this.cards.push(null)
        }

    }


    initalize(card: typeof Card, index: number){
        this.color = card.color
        this.cards[index] = card
        this.winnerIndex = null
    }

    submitCard(card: typeof Card, index: number){
        this.cards[index] = card

        var allDone = true
        for(let card of this.cards){
            if(card === null){
                allDone = false
            }
        }

        if(allDone){
            return this.calculateWinner()
        }

        return allDone
    }


    calculateWinner(){

        var indexOfBestCard = -1
        
        for(var i = 0; i < this.cards.length; i++){

            if(indexOfBestCard === -1){
                indexOfBestCard = i
            }else if(this.cards[i].color === this.trumpColor && this.cards[indexOfBestCard].color === this.trumpColor && this.cards[i].power > this.cards[indexOfBestCard].power){
                indexOfBestCard = i
            }else if(this.cards[i].color === this.trumpColor && this.cards[indexOfBestCard].color !== this.trumpColor){
                indexOfBestCard = i
            }else if(this.cards[i].color === this.color && this.cards[indexOfBestCard].color == this.color && this.cards[i].power > this.cards[indexOfBestCard].power){
                indexOfBestCard = i
            }else if(this.cards[i].color === this.color && this.cards[indexOfBestCard].color !== this.color && this.cards[indexOfBestCard].color !== this.trumpColor){
                indexOfBestCard = i
            }
            
        }

        this.winnerIndex = indexOfBestCard

        console.log('best card')
        console.log(indexOfBestCard)
        console.log(this.cards)

        return indexOfBestCard
    }



}











export class Player{

    public points: number

    constructor(public player_id: string, public player_name: string){
        this.points = 0
    }

    addPoints(points: number){
        this.points += points
    }
}


export enum MoveType {ADD_PLAYER ,BID, DISCARD ,PLAY, SET_TRUMP, INITALIZE_GAME, CHOOSE_PARTNER, CORRECTING_MISDEAL}


export class Play {
    constructor(public moveType: MoveType, public player_id: string ,public payload: any){}
}






