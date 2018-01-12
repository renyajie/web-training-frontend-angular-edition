import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExpDocUploadComponent } from './exp-doc-upload.component';

const expDocUploadRoutes: Routes = [
  { path: '', component: ExpDocUploadComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(expDocUploadRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExpDocUploadRoutingModule { }
