import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExpDocReqListComponent } from './exp-doc-req-list.component';
import { ExpDocReqDetailComponent } from '../exp-doc-req-detail/exp-doc-req-detail.component';

const expDocReqListRoutes: Routes = [
  { 
    path: '', 
    children: [
      { path: '', component: ExpDocReqListComponent },
      { path: ':id', component: ExpDocReqDetailComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(expDocReqListRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExpDocReqListRoutingModule { }
