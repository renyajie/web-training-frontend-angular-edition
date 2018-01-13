import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ngx-bootstrap';

import { CourseDocRoutingModule } from './course-doc-routing.module';

import { CourseDocService } from '../../core/course-doc.service';

import { CourseDocComponent } from './course-doc.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CourseDocRoutingModule,
    DatepickerModule.forRoot()
  ],
  declarations: [
    CourseDocComponent
  ],
  providers: [
    CourseDocService
  ]
})
export class CourseDocModule { }
