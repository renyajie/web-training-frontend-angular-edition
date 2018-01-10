import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LaboratoryRoutingModule } from './laboratory-routing.module';

import { LabService } from '../../core/lab.service';

import { LaboratoryComponent } from './laboratory.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LaboratoryRoutingModule
  ],
  declarations: [
    LaboratoryComponent
  ],
  providers: [
    LabService
  ]
})
export class LaboratoryModule { }
