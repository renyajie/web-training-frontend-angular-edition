import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsInsertRoutingModule } from './news-insert-routing.module';

import { NewsInsertComponent } from './news-insert.component';

@NgModule({
  imports: [
    CommonModule,
    NewsInsertRoutingModule
  ],
  declarations: [
    NewsInsertComponent
  ]
})
export class NewsInsertModule { }
