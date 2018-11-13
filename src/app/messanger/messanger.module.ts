import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessangerComponent } from './messanger.component';
import { EmailerModule } from './emailer/emailer.module';
import { TelegrammerModule } from './telegrammer/telegrammer.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { SendMessageComponent } from './send-message/send-message.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    MessangerComponent,
    SendMessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EmailerModule,
    TelegrammerModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class MessangerModule {}
