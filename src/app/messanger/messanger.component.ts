import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-messanger',
  templateUrl: './messanger.component.html',
  styleUrls: ['./messanger.component.sass']
})
export class MessangerComponent implements OnInit {
  messangerTitle: string;
  links;

  emailerLinks = [
    { name: 'Inbox', url: 'emailer/inbox' },
    { name: 'Spam', url: 'emailer/spam' },
    { name: 'Social', url: 'emailer/social' },
    { name: 'Starred', url: 'emailer/starred' },
    { name: 'Sent', url: 'emailer/sent' }
  ];

  telegrammerLinks = [
    { name: 'Inbox2', url: 'emailer/inbox' },
    { name: 'Spam2', url: 'emailer/spam' },
    { name: 'Social2', url: 'emailer/social' },
    { name: 'Starred2', url: 'emailer/starred' },
    { name: 'Sent2', url: 'emailer/sent' }
  ];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private stateService: StateService) { }

  ngOnInit() {
    if ( this.router.url.match('emailer') ) {
      this.messangerTitle = 'Emailer';
      this.links = this.emailerLinks;
    } else {
      this.messangerTitle = 'Telegrammer';
      this.links = this.telegrammerLinks;
    }
    this.stateService.messangerState.next( this.messangerTitle );
  }

}
