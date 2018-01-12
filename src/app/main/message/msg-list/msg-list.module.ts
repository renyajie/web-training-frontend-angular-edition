import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { MsgListRoutingModule } from './msg-list-routing.module';

import { MsgListComponent } from './msg-list.component';
import { MsgDetailComponent } from '../msg-detail/msg-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MsgListRoutingModule,
    DatepickerModule.forRoot()
  ],
  declarations: [
    MsgListComponent,
    MsgDetailComponent
  ]
})
export class MsgListModule { }
