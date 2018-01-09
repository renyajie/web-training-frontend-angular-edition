import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news.component';

const newsRoutes: Routes = [
  { path: '', component: NewsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(newsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NewsRoutingModule { }
