import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ngx-bootstrap';

import { ExpDocUploadRoutingModule } from './exp-doc-upload-routing.module';

import { ExpDocUploadComponent } from './exp-doc-upload.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ExpDocUploadRoutingModule,
    DatepickerModule.forRoot()
  ],
  declarations: [
    ExpDocUploadComponent
  ]
})
export class ExpDocUploadModule { }
