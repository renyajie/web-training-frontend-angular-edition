import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpDocRoutingModule } from './exp-doc-routing.module';

import { ExpDocReqService } from '../../core/exp-doc-req.service';
import { ExpDocService } from '../../core/exp-doc.service';

import { ExpDocComponent } from './exp-doc.component';

@NgModule({
  imports: [
    CommonModule,
    ExpDocRoutingModule
  ],
  declarations: [
    ExpDocComponent
  ],
  providers: [
    ExpDocReqService,
    ExpDocService
  ]
})
export class ExpDocModule { }
