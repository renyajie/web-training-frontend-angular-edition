import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { Router } from '@angular/router';

import { CourseService } from '../../../core/course.service';
import { PersonInfoService } from '../../../core/person-info.service';

import { CourseAux } from '../../../po/course-aux';
import { CourseResult } from '../../../po/course-result';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  isStudent: boolean;
  courseAuxArray$: Observable<CourseAux[][]>;

  constructor(
    private courseService: CourseService,
    private personInfoService: PersonInfoService,
    private router: Router) { 
      this.isStudent = this.personInfoService.isStudent;
    }

  ngOnInit() {
    this.getCourseTable();
  }

  getCourseTable() {
    let courseResults: CourseResult[] = [];
    this.courseService.getAllCourse().subscribe(
      data => {
        //若服务器成功返回数据
        if(data['code'] === 100) {
          data['extend']['info'].map(result => {
            courseResults.push(CourseResult.fromJSON(result));
          });
          console.log(courseResults)
          this.courseAuxArray$ = of(this.courseService.calculateCourseTable(courseResults));
          this.courseAuxArray$.subscribe(data => console.log(data));
        }
      }
    )
  }

  goToInsert() {
    this.router.navigate(['main/teacher/course/insert'])
  }

}
