import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpDocRoutingModule } from './exp-doc-routing.module';
import { ExpDocComponent } from './exp-doc.component';

@NgModule({
  imports: [
    CommonModule,
    ExpDocRoutingModule
  ],
  declarations: [
    ExpDocComponent
  ]
})
export class ExpDocModule { }
