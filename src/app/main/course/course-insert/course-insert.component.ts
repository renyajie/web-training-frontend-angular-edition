import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';

import { CourseService } from '../../../core/course.service';

import { Course } from '../../../po/course';
import { CourseInfo } from '../../../po/course-info';

@Component({
  selector: 'app-course',
  templateUrl: './course-insert.component.html',
  styleUrls: ['./course-insert.component.css']
})
export class CourseInsertComponent implements OnInit {

  courseInfo$: Observable<CourseInfo[]>;
  course: Course;

  constructor(
    private router: Router,
    private courseService: CourseService
  ) { 
    this.course = new Course(null, null, null, null, null, null, null, null);
  }

  get diagnostic() { return JSON.stringify(this.course); }

  ngOnInit() {
    //获取课程基本信息，用于下拉列表
    let courseInfos = [];
    this.courseService.getAllCourseBaseInfo().subscribe(
      data => {
        //若服务器成功返回数据
        if(data['code'] === 100) {
          data['extend']['info'].map(courseInfo => {
            courseInfos.push(CourseInfo.fromJSON(courseInfo));
          })
          //TODO removes
          console.log(courseInfos);
          this.courseInfo$ = of(courseInfos);
        }
        //若出错
        else {
          alert("服务器发生错误");
        }
      }
    )
  }

  submitData(){
    //检查数据的完备性
    if(this.course.courseId == null) {
      alert("课程编号不能为空");
      return;
    }
    if(this.course.startCourseTime == null) {
      alert("课程开始时间不能为空");
      return;
    }
    if(this.course.endCourseTime == null) {
      alert("课程结束时间不能为空");
      return;
    }
    if(this.course.weekday == null) {
      alert("上课时间不能为空");
      return;
    }
    if(this.course.startWeek == null) {
      alert(" 起始周不能为空");
      return;
    }
    if(this.course.endWeek == null) {
      alert("结束周不能为空");
      return;
    }
    if(this.course.labId == null) {
      alert("实验室编号不能为空");
      return;
    }
    //判断数据的合法性
    if(this.course.startWeek <= 0 || this.course.endWeek <= 0 
      || this.course.startCourseTime <= 0 || this.course.endCourseTime <= 0) {
        alert("数字必须为正数");
        return;
      }
    if(this.course.startCourseTime > this.course.endCourseTime) {
      alert("开始上课时间不能迟于结束上课时间");
      return;
    }
    if(this.course.startWeek > this.course.endWeek) {
      alert("起始周不能晚于结束周");
      return;
    }
    //提交数据
    this.courseService.addOneCourse(this.course).subscribe(
      data => {
        if(data['code'] === 100) {
          alert("提交成功");
          this.goToList();
        }
        else{
          //提示服务器返回的错误信息
          const errorFields = data['extend']['errorFields'];
          for(let msg of errorFields) {
            alert("服务器校验信息: " + msg);
          }
        }
      }
    )
  }

  goToList(){
    this.router.navigate(['main/teacher/course']);
  }

}
