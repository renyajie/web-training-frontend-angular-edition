import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CourseRoutingModule } from './course-routing.module';

import { CourseComponent } from './course.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CourseRoutingModule
  ],
  declarations: [
    CourseComponent
  ]
})
export class CourseModule { }
