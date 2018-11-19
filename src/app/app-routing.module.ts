import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmailerComponent } from './messanger/emailer/emailer.component';
import { TelegrammerComponent } from './messanger/telegrammer/telegrammer.component';
import { MessangerComponent } from './messanger/messanger.component';
import { EmailerMessageListComponent } from './messanger/emailer/emailer-message-list/emailer-message-list.component';
import { EmailerMessageItemComponent } from './messanger/emailer/emailer-message-list/emailer-message-item/emailer-message-item.component';
import { TelegrammerSelectChatComponent } from './messanger/telegrammer/telegrammer-select-chat/telegrammer-select-chat.component';
import { TelegrammerChatComponent } from './messanger/telegrammer/telegrammer-chat/telegrammer-chat.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'messanger', component: MessangerComponent,
    children: [
      { path: '', redirectTo: 'emailer/inbox', pathMatch: 'full' },
      { path: 'emailer', component: EmailerComponent, children: [
        { path: '', redirectTo: 'inbox', pathMatch: 'full' },
        { path: ':msgType', component: EmailerMessageListComponent },
        { path: ':msgType/:id', component: EmailerMessageItemComponent }
      ]},
      { path: 'telegrammer', component: TelegrammerComponent, children: [
        { path: '', component: TelegrammerSelectChatComponent, pathMatch: 'full' },
        { path: ':id', component: TelegrammerChatComponent }
      ]}
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
