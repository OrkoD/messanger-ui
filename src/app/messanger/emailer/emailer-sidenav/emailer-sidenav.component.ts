import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emailer-sidenav',
  templateUrl: './emailer-sidenav.component.html',
  styleUrls: ['./emailer-sidenav.component.sass']
})
export class EmailerSidenavComponent implements OnInit {
  @Output() openWindow: EventEmitter<any> = new EventEmitter;

  links = [
    { name: 'Inbox', url: 'emailer/inbox' },
    { name: 'Spam', url: 'emailer/spam' },
    { name: 'Social', url: 'emailer/social' },
    { name: 'Starred', url: 'emailer/starred' },
    { name: 'Sent', url: 'emailer/sent' }
  ];

  constructor() { }

  ngOnInit() {
  }

  onOpenWindow() {
    this.openWindow.emit();
  }

}
