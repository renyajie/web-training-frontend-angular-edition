import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MessageRoutingModule } from './message-routing.module';

import { MessageComponent } from './message.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MessageRoutingModule
  ],
  declarations: [
    MessageComponent
  ]
})
export class MessageModule { }
