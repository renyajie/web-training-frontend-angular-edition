import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LabInsertComponent } from './lab-insert.component';

const labInsertRoutes: Routes = [
  { path: '', component: LabInsertComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(labInsertRoutes)
  ]
})
export class LabInsertRoutingModule { }
