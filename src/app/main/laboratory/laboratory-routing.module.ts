import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LaboratoryComponent } from './laboratory.component';

const labRoutes: Routes = [
  { 
    path: '', 
    component: LaboratoryComponent,
    children: [
      { path: 'list', loadChildren: 'app/main/laboratory/lab-list/lab-list.module#LabListModule'},
      { path: 'insert', loadChildren: 'app/main/laboratory/lab-insert/lab-insert.module#LabInsertModule'},
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(labRoutes)
  ]
})
export class LaboratoryRoutingModule { }
