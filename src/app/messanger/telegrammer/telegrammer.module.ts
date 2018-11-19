import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelegrammerComponent } from './telegrammer.component';
import { RouterModule } from '@angular/router';
import { TelegrammerSelectChatComponent } from './telegrammer-select-chat/telegrammer-select-chat.component';
import { TelegrammerChatComponent } from './telegrammer-chat/telegrammer-chat.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    TelegrammerComponent,
    TelegrammerSelectChatComponent,
    TelegrammerChatComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTooltipModule
  ]
})
export class TelegrammerModule { }
