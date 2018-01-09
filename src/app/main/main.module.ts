import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { MainRoutingModule } from './main-routing.module';
import { WelcomeModule } from './welcome/welcome.module';
import { HeaderModule } from './header/header.module';
import { LaboratoryModule } from './laboratory/laboratory.module';
import { NewsModule } from './news/news.module';
import { ExpDocModule } from './exp-doc/exp-doc.module';

import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule,
    WelcomeModule,
    HeaderModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { 
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
