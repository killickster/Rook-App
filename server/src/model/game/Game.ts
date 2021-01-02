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

                        this.players[0].addTeammate(this.players[2])
                        this.players[1].addTeammate(this.players[3])
                        this.players[2].addTeammate(this.players[0])
                        this.players[3].addTeammate(this.players[1])
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

        if(!this.validateMove(play)){
            throw('INVALID_MOVE')
        }

        switch(play.moveType){
            case MoveType.ADD_PLAYER:
                console.log('add player')
                return resolve(this.addPlayer(play.payload))
            case MoveType.BID:
                this.currentPlayer = this.rounds[this.currentRoundIndex].submitBid(play.payload)
                return resolve(this.currentPlayer)
            case MoveType.DISCARD:
                this.currentPlayer = this.rounds[this.currentRoundIndex].setNewHand(play.payload)
                return resolve(this.getGameStateFor(play.player_id))
            case MoveType.SET_TRUMP:
                this.currentPlayer = this.rounds[this.currentRoundIndex].selectTrump(play.payload)
                return resolve(this.getGameStateFor(play.player_id))
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
                    for(var i = 0; i < points.length; i++){


                        if(i%2 === 0){
                            team1Points += points[i]
                        }else{
                            team2Points += points[i]
                        }
                    }

                        var bid = this.rounds[this.currentRoundIndex].bid
                        var bidder = this.rounds[this.currentRoundIndex].bidders[0]

                        if(bidder % 2 === 0){
                           if(team1Points < bid){
                            team1Points = -bid 
                           }
                        }else{
                            if(team2Points < bid){
                                team2Points = -bid
                            }
                        }

                        for(var i = 0; i < this.players.length; i++){
                            if(i%2 == 0){
                                this.players[i].addPoints(team1Points)
                            }else{
                                this.players[i].addPoints(team2Points)
                            }
                        }





                        if(this.players[i].points > 500){
                            this.gameFinished = true

                            return resolve('finished')
                        }

                

                    this.rounds.push(new Round(this.numberOfPlayers))
                    this.currentRoundIndex++
                    this.currentPlayer = this.rounds.length % this.numberOfPlayers
                    this.rounds[this.currentRoundIndex].roundState = RoundState.BIDDING
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


export enum RoundState {WAITING_ON_PLAYERS, DISCARDING, CHOOSING_TRUMP ,BIDDING, LEADING, PLAYING, DONE}

class Round{

    public kitty: typeof Card[] | null
    public hands: typeof Card[][]
    public roundState: RoundState
    public bid: number
    public bidder: number
    public bidWinner: number | null = null
    public bidders: number[]
    public trump: typeof Color
    public tricks: Trick[]
    public deck: typeof Deck

    constructor(private numberOfPlayers: number){
        this.bid = 75
        this.bidder = 0
        const {kitty, hands} = shuffleAndDeal(new Deck(), 5, this.numberOfPlayers)  //5 in kitty for 4 man
        this.kitty = kitty
        this.hands = hands
        this.roundState = RoundState.WAITING_ON_PLAYERS
        this.bidders = []
        for(var i = 0; i < this.numberOfPlayers; i++){
            this.bidders.push(i)
        }
        this.trump = Color.UNDETERMINED
        this.tricks = []
    }


    submitBid(bid: number){

        if(bid >= this.bid + 5){
            this.bid = bid
            this.bidWinner = this.bidder
            
            this.bidder = (this.bidder+1)%this.bidders.length
        }else{
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
        this.roundState = RoundState.PLAYING
        this.tricks.push(new Trick(this.trump))

        for(let hand of this.hands){
            for(let card of hand){
                if(card.color === Color.UNDETERMINED){
                    card.color = color
                }
            }
        }

        return (indexOfBidWinner + 1) % this.numberOfPlayers
    }

    calculatePoints(){
        var points = [0,0,0,0]
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
                    this.tricks.push(new Trick(this.trump))
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

    public cards: typeof Card | null[] = [null, null, null, null] 
    public color: typeof Color | null = null
    public winnerIndex: number | null = null

    constructor(public trumpColor: typeof Color){

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

    public teammate: string | null
    public points: number

    constructor(public player_id: string, public player_name: string){
        this.teammate = null
        this.points = 0
    }

    addTeammate(player: Player){
        this.teammate = player.player_id
    }

    addPoints(points: number){
        this.points += points
    }
}


export enum MoveType {ADD_PLAYER ,BID, DISCARD ,PLAY, SET_TRUMP, INITALIZE_GAME}


export class Play {
    constructor(public moveType: MoveType, public player_id: string ,public payload: any){}
}







//function to randomly generate indicies to divide teams randomly
function generateRandomIndices(numberOfPlayers: number): number[]{

        var selectedIndicies: number[] = []
        while(selectedIndicies.length < numberOfPlayers){
            var index = Math.floor(Math.random() * numberOfPlayers)

            var found = false
            for(var i = 0; i < selectedIndicies.length; i++){
                if(selectedIndicies[i] == index){
                    found = true 
                }
            }
            if(!found){
                selectedIndicies.push(index)
            }

        }

        return selectedIndicies
}


/*
    private players: Player[]
    private gameStage: GameStage
    private team1: Team | null
    private team2: Team | null
    private currentBid: number
    private currentBidder: Player | null
    private numberOfPlayersJoined: number


    constructor(public game_id: string, public numberOfPlayers: number){
        this.numberOfPlayersJoined = 0
        this.players = this.createPlayers(numberOfPlayers)
        this.assignPlayersToTeams()
        this.gameStage = GameStage.WAITING_ON_PLAYERS 
        const {kitty, hands} = shuffleAndDeal(new Deck(), 5, numberOfPlayers)  //5 in kitty for 4 man

        this.team1 = null
        this.team2 = null
        this.currentBid = 80
        this.currentBidder = null
    }

    createPlayers(numberOfPlayers: number){
        var players = []

        for(var i = 0; i < numberOfPlayers; i++){
            players.push(new Player(this.game_id, null, null, null))
        }
        return players
    }

    assignPlayersToTeams(){
        var indicies = generateRandomIndices(4)

        var playerOne = this.players[indicies[0]]
        var playerTwo = this.players[indicies[1]]
        var playerThree = this.players[indicies[2]]
        var playerFour = this.players[indicies[3]]

        playerOne.addTeammate(playerTwo)
        playerTwo.addTeammate(playerOne)
        playerThree.addTeammate(playerFour)
        playerFour.addTeammate(playerThree)

        this.team1 = new Team(playerOne, playerTwo)
        this.team2 = new Team(playerThree, playerFour)

    }



    makeMove(play: Play){
        switch(this.gameStage){
            case GameStage.WAITING_ON_PLAYERS:
                this.addPlayer(play.player_id)
                break;
        }
    }



    addPlayer(player_id: string){
        this.numberOfPlayersJoined += 1
        for(let player of this.players){
            if(!player.player_id){
                player.assignId(player_id)
                break;
            }
        }

        if(this.numberOfPlayersJoined === this.numberOfPlayers){
            this.gameStage = GameStage.BIDDING
        }

    }


    viewGame(){

        for(let player of this.players){
            console.log(player.player_name)
            if(player.player_id){
                console.log(player)
            }
        }

    }

    */