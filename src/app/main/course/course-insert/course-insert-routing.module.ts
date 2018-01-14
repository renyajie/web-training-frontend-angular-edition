import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseInsertComponent } from './course-insert.component';

const courseInsertRoutes: Routes = [
  {  path: '', component: CourseInsertComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(courseInsertRoutes)
  ]
})
export class CourseInsertRoutingModule { }
