import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';

import { ExpDocAddRoutingModule } from './exp-doc-add-routing.module';

import { ExpDocAddComponent } from './exp-doc-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule,
    ExpDocAddRoutingModule
  ],
  declarations: [
    ExpDocAddComponent
  ]
})
export class ExpDocAddModule { }
