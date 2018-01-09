import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExpDocComponent } from './exp-doc.component';

const expDocRoutes: Routes = [
  { path: '', component: ExpDocComponent }
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
