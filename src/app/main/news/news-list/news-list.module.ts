import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { NewsListRoutingModule } from './news-list-routing.module';

import { NewsListComponent } from './news-list.component';
import { NewsDetailComponent } from '../news-detail/news-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NewsListRoutingModule,
    DatepickerModule.forRoot()
  ],
  declarations: [
    NewsListComponent,
    NewsDetailComponent
  ]
})
export class NewsListModule { }
