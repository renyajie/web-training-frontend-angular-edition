import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MsgListComponent } from './msg-list.component';
import { MsgDetailComponent } from '../msg-detail/msg-detail.component';

const msgListRoutes: Routes = [
  { 
    path: '', 
    children: [
      { path: '', component: MsgListComponent },
      { path: ':id', component: MsgDetailComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(msgListRoutes)
  ]
})
export class MsgListRoutingModule { }
