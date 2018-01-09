import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartRoutingModule } from './start-routing.module';

import { StartComponent} from './start.component';

@NgModule({
  imports: [
    CommonModule,
    StartRoutingModule
  ],
  declarations: [
    StartComponent
  ]
})
export class StartModule { }
