import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { EmailerComponent } from './emailer.component';
import { EmailerMessageListComponent } from './emailer-message-list/emailer-message-list.component';
import { EmailerMessageItemComponent } from './emailer-message-list/emailer-message-item/emailer-message-item.component';
import { FilterMsgPipe } from 'src/app/pipes/filter-msg.pipe';
import { TimeAgoPipe } from 'time-ago-pipe';

@NgModule({
  declarations: [
    EmailerComponent,
    EmailerMessageListComponent,
    EmailerMessageItemComponent,
    FilterMsgPipe,
    TimeAgoPipe
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: []
})
export class EmailerModule { }
