import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Card } from 'src/app/services/models/card.model';
import { RoundState } from 'src/app/services/models/round-stage.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, OnChanges {
  @Input() playerInfo: {};
  @Input() playerIndex: number;
  @Input() globalIndex: number
  hands: Card[] = null;
  playerNames: String[] = null;
  playing: boolean = null;
  playedCards: Card[] = null;
  currentPlayer: number = null;
  bidWinner: number = null;
  bids: number = null
  roundState = null

  
  constructor() { }

  ngOnInit(): void {
    this.playing = this.playerInfo["playing"]
    this.hands = this.playerInfo["hands"]
    this.playerNames = this.playerInfo["playerNames"]
    this.playing = this.playerInfo["playing"]
    this.playedCards = this.playerInfo["playedCards"]
    this.currentPlayer = this.playerInfo["currentPlayer"]
    this.bidWinner = this.playerInfo["bidWinner"]
    this.bids = this.playerInfo["bids"]
    this.roundState = this.playerInfo['roundState'] === RoundState.BIDDING

  }
  ngOnChanges(): void {
    this.hands = this.playerInfo["hands"]
    this.playerNames = this.playerInfo["playerNames"]
    this.playing = this.playerInfo["playing"]
    this.playedCards = this.playerInfo["playedCards"]
    this.currentPlayer = this.playerInfo["currentPlayer"]
    this.bidWinner = this.playerInfo["bidWinner"]
    this.bids = this.playerInfo["bids"]
    this.roundState = this.playerInfo['roundState'] === RoundState.BIDDING
    console.log('player index')
    console.log(this.playerIndex)
    console.log('cards')
    console.log(this.hands[this.playerIndex])
    console.log('global index')
    console.log(this.globalIndex)
    console.log(this.hands)
  }

}
