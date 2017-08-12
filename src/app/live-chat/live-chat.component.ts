import { Component, OnInit, Input } from '@angular/core';
import { Mensagem } from "app/models/mensagem";
import { SocketService } from "app/socket.service";

@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.css']
})
export class LiveChatComponent implements OnInit {
  @Input() isChatDisabled = '';

  messageTextArea : string;
  mensagens: Mensagem[] = [];
  constructor(private socketService: SocketService) {
    socketService.messages$.subscribe( data => {
      console.log("aqui get message", data);
      this.mensagens.push(data);
    })
  }

  ngOnInit() {
    this.socketService.getMessages().subscribe( (data) => {
      console.log(data);
      // let mensagem = new Mensagem(1,data.text,new Date(),data.user);
      this.mensagens.push(data);
    });
  }

  sendNewMessage(){
    this.socketService.sendMessage(this.messageTextArea);
    this.messageTextArea = '';
  }



}
