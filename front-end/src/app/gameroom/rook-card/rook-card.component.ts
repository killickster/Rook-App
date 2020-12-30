import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../services/models/card.model';
import {Color} from '../../services/models/color.model'

@Component({
  selector: 'app-rook-card',
  templateUrl: './rook-card.component.html',
  styleUrls: ['./rook-card.component.css'],
  
})
export class RookCardComponent implements OnInit {
  @Input() card: Card;
  color: string

  constructor() { }

  ngOnInit(): void {

    switch(this.card.color){
      case Color.BLACK:
        this.color = 'black'
        break
      case Color.RED:
        this.color = 'red'
        break;
      case Color.YELLOW:
        this.color = 'yellow'
        break;
      case Color.GREEN:
        this.color = 'green'
        break;
    }

    console.log(this.color)
  }

  cardClicked() {
    if (this.card.state === "face") {
      this.card.state = "flipped";
    } else {
      this.card.state = "face";
    }
  }

}
