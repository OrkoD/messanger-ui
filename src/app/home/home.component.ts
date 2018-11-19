import { Component } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent{
  accounts = [
    { name: 'Emailer', link: 'messanger/emailer', img: 'email' },
    { name: 'Telegrammer', link: 'messanger/telegrammer', img: 'phone' }
  ]
}
