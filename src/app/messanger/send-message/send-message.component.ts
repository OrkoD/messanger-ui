import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalWindowComponent } from '../emailer/modal-window/modal-window.component';
import { DataService } from 'src/app/services/data.service';
import { Message } from 'src/app/interfaces/message';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.sass']
})
export class SendMessageComponent implements OnInit {
  showWindow = false;

  constructor(public dialog: MatDialog,
              private dataService: DataService) { }

  ngOnInit() {
  }

  openWindow() {
    this.showWindow = true;
  }

  closeWindow() {
    this.showWindow = false;
  }

  onSendMessage( sentMessage ) {
    if ( !sentMessage.recipient )
      return this.openDialog('Error', 'Please, specify at least one recipient.', false);
    if ( !sentMessage.subject && !sentMessage.text )
      return this.openDialog('Error', `You can't send this message without a subject or text in the body.`, false, sentMessage)
    sentMessage.type = 'sent';
    this.saveMessage( sentMessage );
  }

  openDialog( title, msg, okBtn, formValue? ): void {
    const dialogRef = this.dialog.open(ModalWindowComponent, {
      data: { title, msg, okBtn }
    });
    // dialogRef.afterClosed().subscribe(res => {
    //   if ( res ) {
    //     this.saveMessage( formValue );
    //   }
    // })
  }

  saveMessage( message: Message ) {
    this.dataService.addMessage( message ).subscribe();
    this.closeWindow();
  }
 
}
