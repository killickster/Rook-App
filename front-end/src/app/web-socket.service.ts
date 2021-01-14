import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import * as io from 'socket.io-client/dist/socket.io'

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  socket: any 
  readonly uri = 'wss://ec2-52-24-67-171.us-west-2.compute.amazonaws.com:3000'

  constructor() { 
    console.log(this.uri)
    this.socket = io(this.uri)
  }

  listen(eventName: string){
    return new Observable((subscriber) => {
      this.socket.on(eventName, data => {
        subscriber.next(data)
      }

        )
    })
  }


  emit(eventName: string, data:any){
    this.socket.emit(eventName, data)
  }
}