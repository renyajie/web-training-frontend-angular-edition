import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MsgInsertRoutingModule } from './msg-insert-routing.module';

import { MsgInsertComponent } from './msg-insert.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MsgInsertRoutingModule
  ],
  declarations: [
    MsgInsertComponent
  ]
})
export class MsgInsertModule { }
