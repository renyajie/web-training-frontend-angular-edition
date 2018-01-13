import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

import { ExpDocReqInsertRoutingModule } from './exp-doc-req-insert-routing.module';

import { ExpDocReqInsertComponent } from './exp-doc-req-insert.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DatepickerModule.forRoot(),
    ExpDocReqInsertRoutingModule
  ],
  declarations: [
    ExpDocReqInsertComponent
  ]
})
export class ExpDocReqInsertModule { }
