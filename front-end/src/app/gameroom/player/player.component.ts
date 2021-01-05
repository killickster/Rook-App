import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Card } from 'src/app/services/models/card.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, OnChanges {
  @Input() playerInfo: {};
  @Input() playerIndex: number;
  hands: Card[] = null;
  playerNames: String[] = null;
  playing: boolean = null;
  playedCards: Card[] = null;
  currentPlayer: number = null;
  bidWinner: number = null;

  
  constructor() { }

  ngOnInit(): void {
    console.log('player info')
    console.log(this.playerInfo)
    this.hands = this.playerInfo["hands"]
    this.playerNames = this.playerInfo["playerNames"]
    this.playing = this.playerInfo["playing"]
    this.playedCards = this.playerInfo["playedCards"]
    this.currentPlayer = this.playerInfo["currentPlayer"]
    this.bidWinner = this.playerInfo["bidWinner"]
  }
  ngOnChanges(): void {
    console.log('player info')
    console.log(this.playerInfo)
    this.hands = this.playerInfo["hands"]
    this.playerNames = this.playerInfo["playerNames"]
    this.playing = this.playerInfo["playing"]
    this.playedCards = this.playerInfo["playedCards"]
    this.currentPlayer = this.playerInfo["currentPlayer"]
    this.bidWinner = this.playerInfo["bidWinner"]
  }

}
