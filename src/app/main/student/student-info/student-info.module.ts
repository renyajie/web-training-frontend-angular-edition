import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

import { StudentInfoRoutingModule } from './student-info-routing.module';
import { StudentInfoComponent } from './student-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StudentInfoRoutingModule,
    DatepickerModule.forRoot()
  ],
  declarations: [
    StudentInfoComponent
  ]
})
export class StudentInfoModule { }
