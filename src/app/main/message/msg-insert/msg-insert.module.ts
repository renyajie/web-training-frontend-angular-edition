import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MsgInsertRoutingModule } from './msg-insert-routing.module';

import { MsgInsertComponent } from './msg-insert.component';

@NgModule({
  imports: [
    CommonModule,
    MsgInsertRoutingModule
  ],
  declarations: [
    MsgInsertComponent
  ]
})
export class MsgInsertModule { }
