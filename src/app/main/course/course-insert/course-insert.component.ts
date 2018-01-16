import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';

import { CourseService } from '../../../core/course.service';
import { LabService } from '../../../core/lab.service';

import { Course } from '../../../po/course';
import { CourseInfo } from '../../../po/course-info';
import { Laboratory } from '../../../po/laboratory';

/**
 * 录入课程帮助类，建立字符和数字的之间的映射
 */
class TokenMapping {
  constructor(public description: string, public value: number) {};
}

@Component({
  selector: 'app-course',
  templateUrl: './course-insert.component.html',
  styleUrls: ['./course-insert.component.css']
})
export class CourseInsertComponent implements OnInit {

  courseInfo$: Observable<CourseInfo[]>;
  labs$: Observable<Laboratory[]>;
  course: Course;
  weekDays: TokenMapping[];
  courseTimes: TokenMapping[];
  weeks: TokenMapping[];

  constructor(
    private router: Router,
    private labService: LabService,
    private courseService: CourseService
  ) { 
    //初始化成员和下拉列表数据参数
    this.course = new Course(null, null, null, null, null, null, null, null);
    this.weekDays = [
      new TokenMapping('周一', 1),
      new TokenMapping('周二', 2),
      new TokenMapping('周三', 3),
      new TokenMapping('周四', 4),
      new TokenMapping('周五', 5),
      new TokenMapping('周六', 6),
      new TokenMapping('周日', 7)
    ];
    this.courseTimes = [
      new TokenMapping('上午 第一节课', 1),
      new TokenMapping('上午 第二节课', 2),
      new TokenMapping('上午 第三节课', 3),
      new TokenMapping('上午 第四节课', 4),
      new TokenMapping('上午 第五节课', 5),
      new TokenMapping('下午 第六节课', 6),
      new TokenMapping('下午 第七节课', 7),
      new TokenMapping('下午 第八节课', 8),
      new TokenMapping('下午 第九节课', 9),
      new TokenMapping('晚上 第十节课', 10),
      new TokenMapping('晚上 第十一节课', 11),
      new TokenMapping('晚上 第十二节课', 12)
    ];
    this.weeks = [
      new TokenMapping('第一周', 1),
      new TokenMapping('第二周', 2),
      new TokenMapping('第三周', 3),
      new TokenMapping('第四周', 4),
      new TokenMapping('第五周', 5),
      new TokenMapping('第六周', 6),
      new TokenMapping('第七周', 7),
      new TokenMapping('第八周', 8),
      new TokenMapping('第九周', 9),
      new TokenMapping('第十周', 10),
      new TokenMapping('第十一周', 11),
      new TokenMapping('第十二周', 12),
      new TokenMapping('第十三周', 13),
      new TokenMapping('第十四周', 14),
      new TokenMapping('第十五周', 15),
      new TokenMapping('第十六周', 16),
      new TokenMapping('第十七周', 17),
      new TokenMapping('第十八周', 18),
    ];
  }

  get diagnostic() { return JSON.stringify(this.course); }

  ngOnInit() {
    // 获取课程基本信息，用于下拉列表
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
    // 获取实验室基本信息，用于下拉列表
    let labs = [];
    this.labService.getAllLabBaseInfo().subscribe(
      data => {
        //若服务器成功返回数据
        if(data['code'] === 100) {
          data['extend']['info'].map(lab => {
            labs.push(Laboratory.fromJSON(lab));
          })
          //TODO removes
          console.log(labs);
          this.labs$ = of(labs);
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
