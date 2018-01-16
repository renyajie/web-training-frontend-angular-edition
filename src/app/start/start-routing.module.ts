import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from './start.component';
import { PageNotFoundComponent } from '../core/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const startRoutes: Routes = [
  { 
    path: 'start', 
    component: StartComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      //{ path: 'login', loadChildren: 'app/main/start/login/login.module#LoginModule' },
      //{ path: 'register', loadChildren: 'app/main/start/register/register.module#RegisterModule' },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
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
