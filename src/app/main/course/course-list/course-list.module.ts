import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseListRoutingModule } from './course-list-routing.module';

import { CourseService } from '../../../core/course.service';

import { CourseListComponent } from './course-list.component';

@NgModule({
  imports: [
    CommonModule,
    CourseListRoutingModule
  ],
  declarations: [
    CourseListComponent
  ],
  providers: [
    CourseService
  ]
})
export class CourseListModule { }
