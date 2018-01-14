import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course.component';

const msgRoutes: Routes = [
  { 
    path: '', 
    component: CourseComponent,
    children: [
      { path: 'list', loadChildren: 'app/main/course/course-list/course-list.module#CourseListModule'},
      { path: 'insert', loadChildren: 'app/main/course/course-insert/course-insert.module#CourseInsertModule'},
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(msgRoutes)
  ]
})
export class CourseRoutingModule { }
