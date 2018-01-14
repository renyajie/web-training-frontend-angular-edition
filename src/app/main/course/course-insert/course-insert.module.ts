import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseInsertRoutingModule } from './course-insert-routing.module';

import { CourseInsertComponent } from './course-insert.component';

@NgModule({
  imports: [
    CommonModule,
    CourseInsertRoutingModule
  ],
  declarations: [
    CourseInsertComponent
  ]
})
export class CourseInsertModule { }
