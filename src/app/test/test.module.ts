import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TestRoutingModule } from './test-routing.module';

import { TestComponent } from './test.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TestRoutingModule,
  ],
  declarations: [
    TestComponent
  ]
})
export class TestModule { }
