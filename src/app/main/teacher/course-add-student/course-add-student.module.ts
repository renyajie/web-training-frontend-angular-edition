import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseAddStudentRoutingModule } from './course-add-student-routing.module';
import { CourseAddStudentComponent } from './course-add-student.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CourseAddStudentRoutingModule
  ],
  declarations: [
    CourseAddStudentComponent
  ]
})
export class CourseAddStudentModule { }
