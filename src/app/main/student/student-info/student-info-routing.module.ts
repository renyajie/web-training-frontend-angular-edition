import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentInfoComponent } from './student-info.component';

const studentInfoRoutes: Routes = [
  { path: '', component: StudentInfoComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(studentInfoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StudentInfoRoutingModule { }
