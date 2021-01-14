import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import * as io from 'socket.io-client/dist/socket.io'
import {isDevMode} from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  socket: any 
  readonly uri_prod = 'ws://ec2-52-24-67-171.us-west-2.compute.amazonaws.com/games/socket'
  readonly uri_dev = 'ws://localhost:3000/games/socket'

  constructor() { 

    if(isDevMode()){
      this.socket = io(this.uri_dev)
      console.log(this.uri_dev)
    }else{
      this.socket = io(this.uri_prod)
      console.log(this.uri_prod)
    }
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