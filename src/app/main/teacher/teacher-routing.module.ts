import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher.component';

const teacherRoutes: Routes = [
  { 
    path: '', 
    component: TeacherComponent,
    children: [
      { path: 'course', loadChildren: 'app/main/course/course.module#CourseModule'},
      { path: 'course-doc-upload', loadChildren: 'app/main/teacher/course-doc-upload/course-doc-upload.module#CourseDocUploadModule'},
      { path: 'info', loadChildren: 'app/main/teacher/teacher-info/teacher-info.module#TeacherInfoModule'},
      { path: '', redirectTo: 'course-doc-upload', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(teacherRoutes)
  ]
})
export class TeacherRoutingModule { }
