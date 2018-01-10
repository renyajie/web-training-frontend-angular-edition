import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabListRoutingModule } from './lab-list-routing.module';

import { LabListComponent } from './lab-list.component';
import { LabDetailComponent } from '../lab-detail/lab-detail.component';

@NgModule({
  imports: [
    CommonModule,
    LabListRoutingModule
  ],
  declarations: [
    LabListComponent,
    LabDetailComponent
  ]
})
export class LabListModule { }
