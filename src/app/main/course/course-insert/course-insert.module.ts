import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseInsertRoutingModule } from './course-insert-routing.module';

import { LabService } from '../../../core/lab.service';

import { CourseInsertComponent } from './course-insert.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CourseInsertRoutingModule
  ],
  declarations: [
    CourseInsertComponent
  ],
  providers: [
    LabService
  ]
})
export class CourseInsertModule { }
