import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-messanger',
  templateUrl: './messanger.component.html',
  styleUrls: ['./messanger.component.sass']
})
export class MessangerComponent implements OnInit {
  messangerTitle: string;
  links = [
    {
      name: 'Inbox',
      url: 'emailer/inbox'
    },
    {
      name: 'Spam',
      url: 'emailer/spam'
    },
    {
      name: 'Social',
      url: 'emailer/social'
    },
  ]

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    if ( this.router.url.match('emailer') ) {
      this.messangerTitle = 'Emailer';
      // this.links = this.emailerLinks;
    } else {
      this.messangerTitle = 'Telegrammer';
      // this.links = this.telegrammerLinks;
    }
  }

}
