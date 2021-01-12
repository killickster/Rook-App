import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user.model';
import { GamesService } from 'src/app/services/games.service';
import { WebSocketService } from 'src/app/web-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chatOpen = false
  messages = []
  numberOfUnreadMessages = 0
  @ViewChild('message') message: ElementRef 


  constructor(private socketService: WebSocketService, private authService: AuthService, private gameService: GamesService) {

      socketService.listen('new_message').subscribe((message: any) => {

        this.authService.user.subscribe(user => {
          console.log(user.id)
          console.log(message.user_id)
          if(!(user.id === message.user_id)){
            message = {...message, me: false}
            this.messages.push(message)
            if(!this.chatOpen){
              this.numberOfUnreadMessages++
            }
          }
        })

        
      })
   }


  toggleChat(){

    this.chatOpen = !this.chatOpen

    this.numberOfUnreadMessages = 0

  }

  keyDown(event){
    if(event.keyCode === 13){
      this.sendMessage(this.message.nativeElement.value)
    }
  }

  sendMessage(message: any){

    console.log('message')

    this.message.nativeElement.value = ""


    this.authService.user.subscribe(user => {
      
      this.messages.push({user: user.name, user_id: user.id, message: message, me: true})

      this.gameService.game.subscribe((game: any) => {

        this.socketService.emit('message', {name: user.name, user_id: user.id, message: message, game_id: game.id})
      })

    })


  }


  ngOnInit(): void {
  }

}
