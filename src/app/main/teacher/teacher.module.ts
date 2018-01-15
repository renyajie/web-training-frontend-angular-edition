import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TeacherRoutingModule } from './teacher-routing.module';

import { CourseService } from '../../core/course.service';

import { TeacherComponent } from './teacher.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TeacherRoutingModule
  ],
  declarations: [
    TeacherComponent
  ],
  providers: [
    CourseService
  ]
})
export class TeacherModule { }
