import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ModalWindowComponent } from '../emailer/modal-window/modal-window.component';
import { DataService } from 'src/app/services/data.service';
import { Message } from 'src/app/interfaces/message';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.sass']
})
export class SendMessageComponent implements OnInit {
  messageForm = new FormGroup({
    recipient: new FormControl(''),
    title: new FormControl(''),
    text: new FormControl(''),
    type: new FormControl('sent')
  })

  filteredOptions: Observable<string[]>;
  options: string[];
  showWindow = false;

  constructor(public dialog: MatDialog,
              private dataService: DataService,
              private snackBarService: SnackBarService) {}

  ngOnInit() {
    this.dataService.getContacts().subscribe(( contacts: any ) => {
      this.options = contacts.map(item => item.email);
    });
    this.filteredOptions = this.messageForm.get('recipient').valueChanges
      .pipe(
        startWith(''),
        map(val => val.length >= 1 ? this._filter( val ): [])
      );
  }

  private _filter( value: string ): string[] {
    const filterValue = value.toLocaleLowerCase();
    return this.options.filter(option => option.toLocaleLowerCase().includes( filterValue ));
  }

  openWindow() {
    this.showWindow = true;
  }

  closeWindow() {
    this.showWindow = false;
    this.resetMessageForm();
  }

  resetMessageForm() {
    this.messageForm.get('recipient').setValue('');
    this.messageForm.get('title').setValue('');
    this.messageForm.get('text').setValue('');
  }

  onSendMessage( sentMessage ) {
    const message = this.messageForm.value;
    if ( !message.recipient )
      return this.openDialog('Error', 'Please, specify at least one recipient.', false);
    if ( !this.validateEmail( sentMessage.recipient ))
      return this.openDialog('Error', 'Please, enter valid email address! Thank you!', false);
    if ( !message.title || !message.text )
      return this.openDialog('Error', `You can't send this message without a title or text in the body.`, false, sentMessage)
    this.saveMessage( message );
  }

  validateEmail( email ) {
    const valid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return valid.test( email );
  }

  openDialog( title, msg, okBtn, formValue? ): void {
    const dialogRef = this.dialog.open(ModalWindowComponent, {
      data: { title, msg, okBtn }
    });
  }

  saveMessage( message: Message ) {
    this.dataService.addMessage( message ).subscribe(
      data => {
        console.log( data );
        this.dataService.addContact( { email: message.recipient } ).subscribe(
          (data: any) => {
            if ( data.success ) return this.snackBarService.sendNotification.next( data.message );
          },
          err => console.log( err )
        );
      },
      err => console.log(err)
    );
    this.closeWindow();
  }
 
}
