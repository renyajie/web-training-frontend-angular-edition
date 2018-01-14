import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherInfoRoutingModule } from './teacher-info-routing.module';

import { TeacherInfoComponent } from './teacher-info.component';

@NgModule({
  imports: [
    CommonModule,
    TeacherInfoRoutingModule
  ],
  declarations: [
    TeacherInfoComponent
  ]
})
export class TeacherInfoModule { }
