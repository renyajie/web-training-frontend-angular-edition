import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseDocUploadComponent } from './course-doc-upload.component';

const courseDocUploadRoutes: Routes = [
  { path: '', component: CourseDocUploadComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(courseDocUploadRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CourseDocUploadRoutingModule { }
