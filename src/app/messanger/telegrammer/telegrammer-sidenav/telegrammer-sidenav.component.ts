import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Channel } from 'src/app/interfaces/channel';

@Component({
  selector: 'app-telegrammer-sidenav',
  templateUrl: './telegrammer-sidenav.component.html',
  styleUrls: ['./telegrammer-sidenav.component.sass']
})
export class TelegrammerSidenavComponent implements OnInit {
  search: string = '';
  channels: Channel[];
  
  womanIcon = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZA_wIwT-DV4G3E3jdNZScRLQnH4faqTH2a7PrNwlhqP4W1Zjh';
  manIcon = 'http://www.domalberto.edu.br/wp-content/uploads/2017/02/joao.png';
  defaultIcon = 'http://биткойн-урал.рф/images/icon5.png';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getConversations().subscribe(( channels: Channel[] ) => {
      this.channels = channels;
    });
  }

  onClearInput() {
    this.search = '';
  }

}
