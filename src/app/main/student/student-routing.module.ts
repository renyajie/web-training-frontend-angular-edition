import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';

const studentRoutes: Routes = [
  { 
    path: '', 
    component: StudentComponent,
    children: [
      { path: 'course', loadChildren: 'app/main/course/course.module#CourseModule'},
      { path: 'info', loadChildren: 'app/main/student/student-info/student-info.module#StudentInfoModule'},
      { path: '', redirectTo: 'course', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(studentRoutes)
  ]
})
export class StudentRoutingModule { }
