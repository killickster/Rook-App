import { Color } from "./Deck"

var {Deck, shuffleAndDeal, Card} = require('./Deck')
const GameSchema = require('../../model/Game')
const User =require('../../model/User')




export class Game{

    public numberOfPlayersJoined: number 
    public players: any[]
    public rounds: Round[]
    public currentRoundIndex: number
    public currentPlayer: number | null

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
            
            if(!this.players[index]){
                this.players[index] = player
                playerIsAssigned = true
            }
        }

        //Assign teammates
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

    }


    move(play: Play){

        if(!this.validateMove(play)){
            throw('INVALID_MOVE')
        }

        switch(play.moveType){
            case MoveType.ADD_PLAYER:
                this.addPlayer(play.payload)
                return this
            case MoveType.BID:
                this.currentPlayer = this.rounds[this.currentRoundIndex].submitBid(play.payload)
                return this
            case MoveType.DISCARD:
                this.currentPlayer = this.rounds[this.currentRoundIndex].setNewHand(play.payload)
                return this
            case MoveType.SET_TRUMP:
                this.currentPlayer = this.rounds[this.currentRoundIndex].selectTrump(play.payload)
                return this
            case MoveType.PLAY:
                var index = this.rounds[this.currentRoundIndex].submitPlay(play.payload)
                if(this.currentPlayer !== null && index === false){
                    this.currentPlayer = (this.currentPlayer+1)/this.numberOfPlayers
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
                    this.rounds[this.currentRoundIndex].roundState = RoundState.DONE
                }

                return this

        }

    }

    validateMove(play: Play): boolean{

        if(this.currentPlayer !== null && this.players[this.currentPlayer].player_id !== play.player_id){
            return false
        }else{
            return true
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
    public trump: Color
    public tricks: Trick[]

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

            this.bidder = (this.bidder+1)%this.bidders.length
        }

        if(this.bidders.length === 1){
            this.roundState = RoundState.DISCARDING
        }

        return this.bidders[this.bidder]
    }


    setNewHand(cards: typeof Card[]){
        var indexOfBidWinner = this.bidders[0]
        this.hands[indexOfBidWinner]  = cards
        this.kitty = null
        this.roundState = RoundState.CHOOSING_TRUMP
        return indexOfBidWinner
    }

    selectTrump(color: Color){
        var indexOfBidWinner = this.bidders[0]
        this.trump = color
        this.roundState = RoundState.PLAYING
        return (indexOfBidWinner + 1) % this.numberOfPlayers
    }

    submitPlay(play: any){
        var card =  play.cards
        var index = play.index

        if(this.tricks.length > 0 && this.tricks[this.tricks.length-1].cards.length < 4){
            var trickDone = this.tricks[this.tricks.length].submitCard(card, index)
            if(trickDone){
                return this.tricks[this.tricks.length].winnerIndex
            }
        }
        else{
            this.tricks.push(new Trick(card, index, this.trump))
        }

        this.hands[index] = this.hands[index].filter(c => {
            return !(c.color === card.color && c.value === card.value)
        })



        return false
    }




}



class Trick{

    public cards: typeof Card | null[] = [null, null, null, null] 
    public color: Color
    public trumpColor: Color
    public winnerIndex: number | null

    constructor(card: typeof Card, index: number, trumpColor: Color){
        this.color = card.color
        this.trumpColor = trumpColor
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
            this.calculateWinner()
        }

        return allDone
    }


    calculateWinner(){

        var indexOfBestCard = -1
        
        for(var i = 0; i < this.cards.length; i++){

            if(indexOfBestCard === -1){
                indexOfBestCard = i
            }else if(this.cards[i].color === this.trumpColor && this.cards[indexOfBestCard] === this.trumpColor && this.cards[i].power > this.cards[indexOfBestCard].power){
                indexOfBestCard = i
            }else if(this.cards[i].color === this.trumpColor && this.cards[indexOfBestCard] !== this.trumpColor){
                indexOfBestCard = i
            }else if(this.cards[i].color === this.color && this.cards[indexOfBestCard] == this.color && this.cards[i].power > this.cards[indexOfBestCard]){
                indexOfBestCard = i
            }else if(this.cards[i].color === this.color && this.cards[indexOfBestCard] !== this.color){
                indexOfBestCard = i
            }
            
        }

        this.winnerIndex = indexOfBestCard
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
}


export enum MoveType {ADD_PLAYER ,BID, DISCARD ,PLAY, SET_TRUMP}


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