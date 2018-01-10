import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LabListComponent } from './lab-list.component';
import { LabDetailComponent } from '../lab-detail/lab-detail.component';

const labListRoutes: Routes = [
  { 
    path: '', 
    children: [
      { path: '', component: LabListComponent },
      { path: ':id', component: LabDetailComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(labListRoutes)
  ]
})
export class LabListRoutingModule { }
