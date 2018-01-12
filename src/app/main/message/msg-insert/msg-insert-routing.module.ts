import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MsgInsertComponent } from './msg-insert.component';

const msgInsertRoutes: Routes = [
  { path: '', component: MsgInsertComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(msgInsertRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MsgInsertRoutingModule { }
