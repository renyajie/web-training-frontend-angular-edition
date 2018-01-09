import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseDocRoutingModule } from './course-doc-routing.module';

import { CourseDocComponent } from './course-doc.component';

@NgModule({
  imports: [
    CommonModule,
    CourseDocRoutingModule
  ],
  declarations: [
    CourseDocComponent
  ]
})
export class CourseDocModule { }
