import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StartRoutingModule } from './start-routing.module';

import { LoginService } from '../core/login.service';

import { StartComponent} from './start.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StartRoutingModule
  ],
  declarations: [
    StartComponent
  ],
  providers: [
    LoginService
  ]
})
export class StartModule { }
