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

@NgModule({
  declarations: [
    MessangerComponent
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
    MatListModule
  ]
})
export class MessangerModule {}
