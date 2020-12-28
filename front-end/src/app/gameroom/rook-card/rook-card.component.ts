import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card.model';

@Component({
  selector: 'app-rook-card',
  templateUrl: './rook-card.component.html',
  styleUrls: ['./rook-card.component.css'],
  
})
export class RookCardComponent implements OnInit {
  @Input() card: Card;

  constructor() { }

  ngOnInit(): void {
  }

  cardClicked() {
    if (this.card.state === "face") {
      this.card.state = "flipped";
    } else {
      this.card.state = "face";
    }
  }

}