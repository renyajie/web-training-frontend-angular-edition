import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpDocReqInsertRoutingModule } from './exp-doc-req-insert-routing.module';

import { ExpDocReqInsertComponent } from './exp-doc-req-insert.component';

@NgModule({
  imports: [
    CommonModule,
    ExpDocReqInsertRoutingModule
  ],
  declarations: [
    ExpDocReqInsertComponent
  ]
})
export class ExpDocReqInsertModule { }
