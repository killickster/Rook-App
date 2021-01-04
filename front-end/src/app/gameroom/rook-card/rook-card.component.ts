import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnChanges, Input, OnInit } from '@angular/core';
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


  ngOnChanges(){

    this.setColor()

  }

  ngOnInit(): void {

    this.setColor()

  }

  setColor(){

    switch(this.card.color){
      case Color.BLACK:
        this.color = 'black'
        break
      case Color.RED:
        this.color = 'red'
        break;
      case Color.YELLOW:
        this.color = 'blue'
        break;
      case Color.GREEN:
        this.color = 'green'
        break;
    }

  }

  cardClicked() {
    if (this.card.state === "face") {
      this.card.state = "flipped";
    } else {
      this.card.state = "face";
    }
  }

}
