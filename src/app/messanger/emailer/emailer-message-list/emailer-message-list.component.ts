import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/interfaces/message';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-emailer-message-list',
  templateUrl: './emailer-message-list.component.html',
  styleUrls: ['./emailer-message-list.component.sass']
})
export class EmailerMessageListComponent implements OnInit {
  msgType: string;
  messages: Message[];

  constructor(private route: ActivatedRoute,
              private dataService: DataService) {}

  ngOnInit() {
    this.route.params.subscribe(p => this.msgType = p.msgType);
    this.dataService.getMessages()
      .subscribe(( messages: Message[] ) => this.messages = messages);
  }

  onDeleteMsg( id: string, $event ) {
    $event.stopPropagation();
    this.dataService.deleteMessage( id )
      .subscribe(( res: any ) => {
        this.messages = this.messages.filter(( msg: Message ) => msg._id !== res.message._id);
      });
  }

  onStarredMsg( message: Message, $event ) {
    $event.stopPropagation();
    const updateData = { starred: !message.starred };
    this.dataService.updateMessage( message._id, updateData )
      .subscribe(( res: any ) => {
        this.messages = this.messages.map(( msg: Message ) => msg._id === res.message._id ? res.message : msg);
      })
  }

}
