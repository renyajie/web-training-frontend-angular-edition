import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';

import { CourseDocUploadRoutingModule } from './course-doc-upload-routing.module';

import { CourseDocUploadComponent } from './course-doc-upload.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule,
    CourseDocUploadRoutingModule
  ],
  declarations: [
    CourseDocUploadComponent
  ]
})
export class CourseDocUploadModule { }
