import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../../core/news.service';

import { NewsRoutingModule } from './news-routing.module';

import { NewsComponent } from './news.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NewsRoutingModule
  ],
  declarations: [
    NewsComponent
  ],
  providers: [
    NewsService
  ]
})
export class NewsModule { }
