import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseAddStudentComponent } from './course-add-student.component';

const courseAddStudentRoutes: Routes = [
  { path: '', component: CourseAddStudentComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(courseAddStudentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CourseAddStudentRoutingModule { }
