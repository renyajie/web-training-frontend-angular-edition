import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';

import { TeacherComponent } from './teacher.component';

@NgModule({
  imports: [
    CommonModule,
    TeacherRoutingModule
  ],
  declarations: [
    TeacherComponent
  ]
})
export class TeacherModule { }
