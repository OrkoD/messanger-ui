import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Message } from 'src/app/interfaces/message';
import { Channel } from 'src/app/interfaces/channel';

@Component({
  selector: 'app-telegrammer-chat',
  templateUrl: './telegrammer-chat.component.html',
  styleUrls: ['./telegrammer-chat.component.sass']
})
export class TelegrammerChatComponent implements OnInit {
  messages: Message[];
  channel: Channel;

  constructor(private route: ActivatedRoute,
              private dataService: DataService) { }

  ngOnInit() {
    this.route.params.subscribe(( params: Params ) => {
      this.dataService.getConversation( params.id ).subscribe(( channel: Channel ) => {
        this.channel = channel;
      });
      this.dataService.getConversationMessages( params.id ).subscribe(( messages: Message[] ) => {
        this.messages = messages;
      });
    })
  }

}
