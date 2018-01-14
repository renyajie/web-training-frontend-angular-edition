import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

import { TeacherInfoRoutingModule } from './teacher-info-routing.module';

import { TeacherInfoComponent } from './teacher-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TeacherInfoRoutingModule,
    DatepickerModule.forRoot()
  ],
  declarations: [
    TeacherInfoComponent
  ]
})
export class TeacherInfoModule { }
