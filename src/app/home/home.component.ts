import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent{
  accounts = [
    {
      name: 'Emailer',
      link: 'messanger/emailer',
      img: 'email'
    },
    {
      name: 'Telegrammer',
      link: 'messanger/telegrammer',
      img: 'phone'
    }
  ]
}
