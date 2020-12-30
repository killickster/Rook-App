import { runInThisContext } from "vm"
import { move } from "../../routes/auth"
import {Play, MoveType, RoundState} from './Game'
const dotenv = require('dotenv')
dotenv.config()
import { Color } from "./Deck"

const mongoose = require('mongoose')



var {Game, Player} = require('./Game.ts')

var game = new Game('1901',4)

var player1 = new Player('19', 'bob')
var player2 = new Player('20', 'jim')
var player3 = new Player('21', 'donald')
var player4 = new Player('22', 'john')

game.move(new Play(MoveType.ADD_PLAYER, player1.player_id, player1 ))

game.move(new Play(MoveType.ADD_PLAYER, player2.player_id, player2 ))

game.move(new Play(MoveType.ADD_PLAYER, player3.player_id, player3 ))

game.move(new Play(MoveType.ADD_PLAYER, player4.player_id, player4 ))



var currentPlayer = game.players[game.currentPlayer]

game.move(new Play(MoveType.BID, currentPlayer.player_id, 90))

currentPlayer = game.players[game.currentPlayer]

game.move(new Play(MoveType.BID, currentPlayer.player_id, 100))

currentPlayer = game.players[game.currentPlayer]

game.move(new Play(MoveType.BID, currentPlayer.player_id, 105))

currentPlayer = game.players[game.currentPlayer]

game.move(new Play(MoveType.BID, currentPlayer.player_id, 100))

currentPlayer = game.players[game.currentPlayer]

var gameState = game.move(new Play(MoveType.BID, currentPlayer.player_id, 100))

currentPlayer = game.players[game.currentPlayer]

var gameState = game.move(new Play(MoveType.BID, currentPlayer.player_id, 100))

currentPlayer = game.players[game.currentPlayer]

if(game.rounds[game.currentRoundIndex].roundState === RoundState.DISCARDING){
    var cards = game.rounds[game.currentRoundIndex].hands[game.currentPlayer]
    var kitty = game.rounds[game.currentRoundIndex].kitty
    for(var i = 0; i < kitty.length; i++){
        cards[i] = kitty[i]
    }
    var gameState = game.move(new Play(MoveType.DISCARD, currentPlayer.player_id,cards))

    if(gameState.rounds[game.currentRoundIndex].roundState === RoundState.CHOOSING_TRUMP){
        console.log('choosing trump')
        for(let i of ['19', '20', '21', '22']){
            try{
                game.move(new Play(MoveType.SET_TRUMP, i , Color.RED))
                break;
            }catch(err){
                console.log(err)
            }

        }

    }

    var gameState = game.rounds[game.currentRoundIndex].roundState
    console.log(gameState)
}

