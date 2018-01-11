import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';

import { LabInsertRoutingModule } from './lab-insert-routing.module';

import { LabInsertComponent } from './lab-insert.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule,
    LabInsertRoutingModule
  ],
  declarations: [
    LabInsertComponent
  ]
})
export class LabInsertModule { }
