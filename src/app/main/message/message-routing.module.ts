import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './message.component';

const msgRoutes: Routes = [
  { 
    path: '', 
    component: MessageComponent,
    children: [
      { path: 'list', loadChildren: 'app/main/message/msg-list/msg-list.module#MsgListModule'},
      { path: 'insert', loadChildren: 'app/main/message/msg-insert/msg-insert.module#MsgInsertModule'},
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(msgRoutes)
  ]
})
export class MessageRoutingModule { }
