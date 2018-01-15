import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatepickerModule } from 'ngx-bootstrap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';

import { ExpDocReqService } from '../../../core/exp-doc-req.service';
import { PersonInfoService } from '../../../core/person-info.service';
import { CourseService } from '../../../core/course.service';

import { ExpDocReqForTeacher } from '../../../po/exp-doc-req-teacher';
import { DateFormat } from '../../../utility/date-format';
import { CourseInfo } from '../../../po/course-info';

@Component({
  selector: 'app-exp-doc-req-insert',
  templateUrl: './exp-doc-req-insert.component.html',
  styleUrls: ['./exp-doc-req-insert.component.css']
})
export class ExpDocReqInsertComponent implements OnInit {

  courseInfo$: Observable<CourseInfo[]>;
  expDocReq: ExpDocReqForTeacher;

  //日期选择框文本
  deadlineBtnText = '选择截止日期';
  //是否显示日期选择框
  showDeadline = false;
  //用户选择的截止日期
  deadline: Date;
  //判断用户是否为第一次选择
  firstChooseForDeadline = true;
  //最大,最小可选日期
  minDate: Date;
  maxDate: Date;

  constructor(
    private router: Router,
    private expDocService: ExpDocReqService,
    private personService: PersonInfoService,
    private courseService: CourseService
  ) { 
    this.expDocReq = new ExpDocReqForTeacher(null, null, null, null, null, null, null);
    this.expDocReq.teacherId = this.personService.account;
    this.deadline = new Date();
    this.minDate = new Date();
    this.maxDate = new Date();
    //设置截止日期最迟为4年
    this.maxDate.setDate(this.minDate.getDate() + 4 * 365);
  }

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

  get diagnostic() { return JSON.stringify(this.expDocReq); }

  /**
   * 是否显示截止日期选择
   * @param event 
   */
  showDeadlinePicker(event: any) {
    if (this.firstChooseForDeadline) {
      this.firstChooseForDeadline = false;
    }
    this.showDeadline = !this.showDeadline;
    this.deadlineBtnText = this.showDeadline ? '完成日期选择' : '选择最早日期';
    this.expDocReq.deadline = this.deadlineText;
  }

  get deadlineText() {
    if (this.firstChooseForDeadline) {
      return '未选择截止日期';
    }
    return DateFormat.formatWithDay(this.deadline);
  }

  submitData(){
    //检查数据的完备性
    if(this.expDocReq.title == null || this.expDocReq.title.length == 0) {
      alert("实验报告要求的标题不能为空");
    }
    if(this.expDocReq.courseId == null) {
      alert("课程编号不能为空");
    }
    if(this.expDocReq.deadline == null || this.expDocReq.deadline.length === 0) {
      alert("截止日期不能为空");
    }
    if(this.expDocReq.info == null || this.expDocReq.info.length == 0) {
      alert("实验报告要求的内容不能为空");
    }  
    //提交数据
    this.expDocService.addOneExpDocReq(this.expDocReq).subscribe(
      data => {
        if(data['code'] === 100) {
          alert("提交成功");
          this.goToList();
        }
        else{
          //提示服务器返回的错误信息
          const errorFields = data['extend']['errorFields'];
          if(errorFields['title'] != null) {
            alert("服务器校验: 标题不能为空");
          }
          if(errorFields['courseId'] != null) {
            alert("服务器校验: 课程编号不能为空");
          }
          if(errorFields['deadline'] != null) {
            alert("服务器校验: 截止日期不能为空");
          }
          if(errorFields['info'] != null) {
            alert("服务器校验: 内容不能为空");
          }
        }
      }
    )
  }

  goToList(){
    this.router.navigate(['main/exp-doc']);
  }

}
