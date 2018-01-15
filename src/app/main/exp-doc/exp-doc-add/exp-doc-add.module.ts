import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpDocAddRoutingModule } from './exp-doc-add-routing.module';

import { ExpDocAddComponent } from './exp-doc-add.component';

@NgModule({
  imports: [
    CommonModule,
    ExpDocAddRoutingModule
  ],
  declarations: [
    ExpDocAddComponent
  ]
})
export class ExpDocAddModule { }
