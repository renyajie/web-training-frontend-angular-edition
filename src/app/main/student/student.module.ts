import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StudentRoutingModule } from './student-routing.module';

import { StudentComponent } from './student.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StudentRoutingModule
  ],
  declarations: [
    StudentComponent
  ]
})
export class StudentModule { }
