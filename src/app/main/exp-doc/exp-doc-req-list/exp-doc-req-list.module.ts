import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ngx-bootstrap';

import { ExpDocReqListRoutingModule } from './exp-doc-req-list-routing.module';

import { ExpDocReqListComponent } from './exp-doc-req-list.component';
import { ExpDocReqDetailComponent } from '../exp-doc-req-detail/exp-doc-req-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ExpDocReqListRoutingModule,
    DatepickerModule.forRoot()
  ],
  declarations: [
    ExpDocReqListComponent,
    ExpDocReqDetailComponent
  ]
})
export class ExpDocReqListModule { }
