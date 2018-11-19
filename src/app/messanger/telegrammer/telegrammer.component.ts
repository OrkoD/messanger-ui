import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-telegrammer',
  templateUrl: './telegrammer.component.html',
  styleUrls: ['./telegrammer.component.sass']
})
export class TelegrammerComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.dataService.
  }

}
