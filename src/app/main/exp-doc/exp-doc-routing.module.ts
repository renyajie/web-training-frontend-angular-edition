import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExpDocComponent } from './exp-doc.component';

const expDocRoutes: Routes = [
  { 
    path: '', 
    component: ExpDocComponent,
    children: [
      { path: 'list', loadChildren: 'app/main/exp-doc/exp-doc-req-list/exp-doc-req-list.module#ExpDocReqListModule'},
      { path: 'insert', loadChildren: 'app/main/exp-doc/exp-doc-req-insert/exp-doc-req-insert.module#ExpDocReqInsertModule'},
      { path: 'upload', loadChildren: 'app/main/exp-doc/exp-doc-upload/exp-doc-upload.module#ExpDocUploadModule'},
      { path: 'add', loadChildren: 'app/main/exp-doc/exp-doc-add/exp-doc-add.module#ExpDocAddModule'},
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(expDocRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExpDocRoutingModule { }
