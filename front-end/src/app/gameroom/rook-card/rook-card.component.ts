import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card.model';

@Component({
  selector: 'app-rook-card',
  templateUrl: './rook-card.component.html',
  styleUrls: ['./rook-card.component.css']
})
export class RookCardComponent implements OnInit {
  @Input() card: Card;

  constructor() { }

  ngOnInit(): void {
  }

}
