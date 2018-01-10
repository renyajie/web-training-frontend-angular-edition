import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabInsertRoutingModule } from './lab-insert-routing.module';

import { LabInsertComponent } from './lab-insert.component';

@NgModule({
  imports: [
    CommonModule,
    LabInsertRoutingModule
  ],
  declarations: [
    LabInsertComponent
  ]
})
export class LabInsertModule { }
