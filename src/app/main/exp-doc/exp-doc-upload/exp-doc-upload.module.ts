import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpDocUploadRoutingModule } from './exp-doc-upload-routing.module';

import { ExpDocUploadComponent } from './exp-doc-upload.component';

@NgModule({
  imports: [
    CommonModule,
    ExpDocUploadRoutingModule
  ],
  declarations: [
    ExpDocUploadComponent
  ]
})
export class ExpDocUploadModule { }
