import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MsgListRoutingModule } from './msg-list-routing.module';

import { MsgListComponent } from './msg-list.component';
import { MsgDetailComponent } from '../msg-detail/msg-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MsgListRoutingModule
  ],
  declarations: [
    MsgListComponent,
    MsgDetailComponent
  ]
})
export class MsgListModule { }
