import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExpDocReqInsertComponent } from './exp-doc-req-insert.component';

const expDocReqInsertRoutes: Routes = [
  { path: '', component: ExpDocReqInsertComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(expDocReqInsertRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExpDocReqInsertRoutingModule { }
