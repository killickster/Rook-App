import {Component, Inject, Output} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { SnackData } from '../snack-data';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import {RookAction} from '../rook-action'

@Component({
  selector: 'app-action-bar',
  templateUrl: "./action-bar.component.html",
  styleUrls: ["./action-bar.component.css"]
})

export class ActionBarComponent {
  public action = new Subject<RookAction>()
  //@Output() action = new EventEmitter<any>();
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackData) { }

  message = this.data.message;
  bid = (this.data.action === 'bid')
  discard = (this.data.action === "discard")
  startingBid = this.data.payload

  decrementBid(){
    if(this.data.payload > this.startingBid){
      this.data.payload -= 5
    }
  }
  incrementBid(){
    this.data.payload +=5
  }

  emitAction(action: string, payload: any){
    //'bid' | 'discard'
    if(action == 'bid'){
      this.action.next(new RookAction('bid', payload))
    }else if(action == 'discard'){
      this.action.next(new RookAction('discard', payload))
    }
    
    
  }
}