import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from '../core/page-not-found.component';

const mainRoutes: Routes = [
  { 
    path: 'main', 
    component: MainComponent,
    children: [
      { path: 'lab', loadChildren: 'app/main/laboratory/laboratory.module#LaboratoryModule' },
      { path: 'news', loadChildren: 'app/main/news/news.module#NewsModule' },
      { path: 'msg', loadChildren: 'app/main/message/message.module#MessageModule' },
      { path: 'exp-doc', loadChildren: 'app/main/exp-doc/exp-doc.module#ExpDocModule' },
      { path: 'course-doc', loadChildren: 'app/main/course-doc/course-doc.module#CourseDocModule' },
      { path: 'teacher', loadChildren: 'app/main/teacher/teacher.module#TeacherModule' },
      { path: 'student', loadChildren: 'app/main/student/student.module#StudentModule' },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
