import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MessageRoutingModule } from './message-routing.module';

import { MsgService } from '../../core/msg.service';

import { MessageComponent } from './message.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MessageRoutingModule
  ],
  declarations: [
    MessageComponent
  ],
  providers: [
    MsgService
  ]
})
export class MessageModule { }
