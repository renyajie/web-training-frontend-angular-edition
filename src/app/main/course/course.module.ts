import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CourseRoutingModule } from './course-routing.module';

import { CourseService } from '../../core/course.service';

import { CourseComponent } from './course.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CourseRoutingModule
  ],
  declarations: [
    CourseComponent
  ],
  providers: [
    CourseService
  ]
})
export class CourseModule { }
