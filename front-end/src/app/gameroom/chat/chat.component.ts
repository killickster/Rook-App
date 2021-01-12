import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('scrollbox') scrollbox: ElementRef 
  @ViewChild('chat') chat: ElementRef 
  @ViewChild('circle') circle: ElementRef 
  @HostListener('document:click', ['$event'])
  clickout(event) {
    console.log(event.target)
    if(this.chat.nativeElement.contains(event.target)) {

    } else if(this.chatOpen && !this.circle.nativeElement.contains(event.target)){
      this.chatOpen = false;
    }
  }


  constructor(private socketService: WebSocketService, private authService: AuthService, private gameService: GamesService,private eRef: ElementRef) {
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
          this.scrollbox.nativeElement.scrollTop = this.scrollbox.nativeElement.scrollHeight
        })

        
      })
   }


  toggleChat(){

    this.chatOpen = !this.chatOpen
    if(this.chatOpen){
      setTimeout(()=>{ // this will make the execution after the above boolean has changed
        this.message.nativeElement.focus();
      },0);  
    }

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
