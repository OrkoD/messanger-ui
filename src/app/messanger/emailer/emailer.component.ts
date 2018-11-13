import { Component } from '@angular/core';

@Component({
  selector: 'app-emailer',
  templateUrl: './emailer.component.html',
  styleUrls: ['./emailer.component.sass']
})
export class EmailerComponent {
  emailerLinks = ['Inbox', 'Starred', 'Outbox', 'Sent'];
}
