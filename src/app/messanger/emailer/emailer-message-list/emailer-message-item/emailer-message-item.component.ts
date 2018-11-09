import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { Message } from 'src/app/interfaces/message';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-emailer-message-item',
  templateUrl: './emailer-message-item.component.html',
  styleUrls: ['./emailer-message-item.component.sass']
})
export class EmailerMessageItemComponent implements OnInit {
  message: Message;

  constructor(private location: Location,
              private dataService: DataService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(( params: Params ) => {
      this.dataService.getMessage( params.id )
        .subscribe(( message: Message ) => this.message = message);
    })
  }

  goBack() {
    this.location.back();
  }

  onDeleteMsg() {
    this.dataService.deleteMessage( this.message._id )
      .subscribe(( res: Response ) => {
        this.location.back();
      })
  }

  getStarShape() {
    return !this.message.starred? 'star_border' : 'star';
  }

  onStarred() {
    const updateData = { starred: !this.message.starred };
    this.dataService.updateMessage( this.message._id, updateData )
      .subscribe(( res: any ) => {
        this.message = res.message;
      })
  }
}
