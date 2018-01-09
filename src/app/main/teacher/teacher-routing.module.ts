import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher.component';

const teacherRoutes: Routes = [
  { path: '', component: TeacherComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(teacherRoutes)
  ]
})
export class TeacherRoutingModule { }
