import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';
import { TestRoutingModule } from './test-routing.module';

import { TestComponent } from './test.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FileUploadModule,
    FormsModule,
    TestRoutingModule,
  ],
  declarations: [
    TestComponent
  ]
})
export class TestModule { }
