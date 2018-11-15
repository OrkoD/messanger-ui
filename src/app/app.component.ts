import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SnackBarService } from './services/snack-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'messanger';

  constructor(public snackBar: MatSnackBar,
              private snackBarService: SnackBarService) {}

  ngOnInit() {
    this.snackBarService.sendNotification.subscribe(( message: string ) => {
      this.openSnackBar( message );
    })
  }

  openSnackBar( message: string, action: string = 'Ok' ) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
