import {Component, Inject, Output} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { SnackData } from '../snack-data';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import {RookAction} from '../rook-action'
import { Color } from 'src/app/services/models/color.model';

@Component({
  selector: 'app-action-bar',
  templateUrl: "./action-bar.component.html",
  styleUrls: ["./action-bar.component.css"]
})

export class ActionBarComponent {
  public action = new Subject<RookAction>()
  //@Output() action = new EventEmitter<any>();
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackData) { }

  values = [1,14,13,12,11,10,9,8,7,6,5,4,3,2]
  colors = ['red', 'blue', 'green', 'black']
  message = this.data.message;
  bid = (this.data.action === 'bid')
  discard = (this.data.action === "discard")
  redeal = (this.data.action === "redeal")
  choosePartner = (this.data.action === "choose_partner")
  roundInfo = (this.data.action === "round_info")
  leaveRoom = (this.data.action === "leave_room")
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
    }else if(action === 'redeal'){
      this.action.next(new RookAction('redeal', payload))
    }else if(action === 'choose_partner'){
      if(this.values.includes(+payload.value) && this.colors.includes(payload.color)){

        switch(payload.color){
          case 'black':
            payload.color = Color.BLACK
            break
          case 'red':
            payload.color = Color.RED
            break;
          case 'blue':
            payload.color = Color.YELLOW
            break;
          case 'green':
            payload.color = Color.GREEN
            break;
      }

      payload.value = +payload.value

      this.action.next(new RookAction('choose_partner', payload))
    }


    }else if(action === 'round_info'){
      this.action.next(new RookAction('round_info', payload))
    }else if(action === 'leave_room'){
      this.action.next(new RookAction('leave_room', payload))

    }
  }
}