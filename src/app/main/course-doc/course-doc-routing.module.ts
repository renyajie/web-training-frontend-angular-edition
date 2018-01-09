import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseDocComponent } from './course-doc.component';

const courseDocRoutes: Routes = [
  { path: '', component: CourseDocComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(courseDocRoutes)
  ]
})
export class CourseDocRoutingModule { }
