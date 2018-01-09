import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start.component';

const startRoutes: Routes = [
  { path: 'start', component: StartComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(startRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StartRoutingModule { }
