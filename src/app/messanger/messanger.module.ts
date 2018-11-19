import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessangerComponent } from './messanger.component';
import { EmailerModule } from './emailer/emailer.module';
import { TelegrammerModule } from './telegrammer/telegrammer.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { SendMessageComponent } from './send-message/send-message.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material';
import { EmailerSidenavComponent } from './emailer/emailer-sidenav/emailer-sidenav.component';
import { TelegrammerSidenavComponent } from './telegrammer/telegrammer-sidenav/telegrammer-sidenav.component';
import { FilterChannelsPipe } from '../pipes/filter-channels.pipe';

@NgModule({
  declarations: [
    MessangerComponent,
    SendMessageComponent,
    EmailerSidenavComponent,
    TelegrammerSidenavComponent,
    FilterChannelsPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    EmailerModule,
    TelegrammerModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatAutocompleteModule
  ]
})
export class MessangerModule {}
