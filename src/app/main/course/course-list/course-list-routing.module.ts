import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list.component';

const courseListRoutes: Routes = [
  { 
    path: '', component: CourseListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(courseListRoutes)
  ]
})
export class CourseListRoutingModule { }
