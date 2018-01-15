import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExpDocAddComponent } from './exp-doc-add.component';

const expDocAddRoutes: Routes = [
  { path: '', component: ExpDocAddComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(expDocAddRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExpDocAddRoutingModule { }
