import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { StartModule } from './start/start.module';
import { MainModule } from './main/main.module';
import { TestModule } from './test/test.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    StartModule,
    MainModule,
    TestModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
