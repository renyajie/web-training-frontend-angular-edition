import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LaboratoryComponent } from './laboratory.component';

const labRoutes: Routes = [
  { path: '', component: LaboratoryComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(labRoutes)
  ]
})
export class LaboratoryRoutingModule { }
