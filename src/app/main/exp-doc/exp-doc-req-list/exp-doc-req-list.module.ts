import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpDocReqListRoutingModule } from './exp-doc-req-list-routing.module';

import { ExpDocReqListComponent } from './exp-doc-req-list.component';
import { ExpDocReqDetailComponent } from '../exp-doc-req-detail/exp-doc-req-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ExpDocReqListRoutingModule
  ],
  declarations: [
    ExpDocReqListComponent,
    ExpDocReqDetailComponent
  ]
})
export class ExpDocReqListModule { }
