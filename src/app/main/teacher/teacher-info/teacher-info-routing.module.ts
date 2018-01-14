import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeacherInfoComponent } from './teacher-info.component';

const teacherInfoRoutes: Routes = [
  { path: '', component: TeacherInfoComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(teacherInfoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TeacherInfoRoutingModule { }
