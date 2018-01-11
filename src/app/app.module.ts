import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { StartModule } from './start/start.module';
import { MainModule } from './main/main.module';
import { TestModule } from './test/test.module';

import { PersonInfoService } from './core/person-info.service';

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
  bootstrap: [AppComponent],
  providers: [
    PersonInfoService
  ]
})
export class AppModule { }
