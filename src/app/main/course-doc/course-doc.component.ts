import { Component, OnInit } from '@angular/core';
import { DatepickerModule } from 'ngx-bootstrap';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';

import { CourseDocService } from '../../core/course-doc.service';

import { DateFormat } from '../../utility/date-format';
import { CourseDoc } from '../../po/course-doc';

@Component({
  selector: 'app-course-doc',
  templateUrl: './course-doc.component.html',
  styleUrls: ['./course-doc.component.css']
})
export class CourseDocComponent implements OnInit {
  pageInfo$: Observable<any>;
  courseDocs$: Observable<CourseDoc[]>;

  //日期选择框文本
  beforeBtnText = '选择最早日期';
  afterBtnText = '选择最晚日期';
  //是否显示日期选择框
  showBeforeDate = false;
  showAfterDate = false;
  //用户选择的最早日期和最晚日期
  beforeDate: Date;
  afterDate: Date;
  //判断用户是否为第一次选择
  firstChooseForBeforeDate = true;
  firstChooseForAfterDate = true;
  //当前日期，最大可选日期和最小可选日期
  current: Date;
  maxDate: Date;
  minDate: Date;
  courseId: string = '';

  constructor(private CourseDocService: CourseDocService) {
    //用到的参数一定要初始化，你无法预知你会什么时候调用它。
    this.beforeDate = new Date();
    this.afterDate = new Date();
    this.current = new Date();
    this.maxDate = new Date();
    this.minDate = new Date();
    //设置最大可选日期是今天，最小可选日期是3年前
    this.maxDate.setDate(this.current.getDate());
    this.minDate.setDate(this.current.getDate() - 3 * 365);
  }

  /**
   * 启动时无条件向服务器请求数据
   */
  ngOnInit() {
    this.getAllCourseDoc();
  }

  showBeforePicker(event: any) {
    if (this.firstChooseForBeforeDate) {
      this.firstChooseForBeforeDate = false;
    }
    this.showBeforeDate = !this.showBeforeDate;
    this.beforeBtnText = this.showBeforeDate ? '完成日期选择' : '选择最早日期';
  }

  showAfterPicker(event: any) {
    if (this.firstChooseForAfterDate) {
      this.firstChooseForAfterDate = false;
    }
    this.showAfterDate = !this.showAfterDate;
    this.afterBtnText = this.showAfterDate ? '完成日期选择' : '选择最晚日期';
  }

  get beforeDateText() {
    if (this.firstChooseForBeforeDate) {
      return '未选择最早日期';
    }
    return DateFormat.formatWithDay(this.beforeDate);
  }

  get afterDateText() {
    if (this.firstChooseForAfterDate) {
      return '未选择最晚日期';
    }
    return DateFormat.formatWithDay(this.afterDate);
  }

  /**
   * 清空选择输入框样式，重置字段
   */
  clear() {
    this.firstChooseForAfterDate = true;
    this.firstChooseForBeforeDate = true;
    this.afterDate = new Date();
    this.beforeDate = new Date();
    this.courseId = '';
  }

  /**
   * 根据条件进行搜索
   */
  getAllCourseDoc(pn?, courseId?) {
    //判断日期选择的合理性
    if (!this.firstChooseForBeforeDate && !this.firstChooseForAfterDate) {
      if (this.beforeDate.getDate() > this.afterDate.getDate()) {
        alert("最早日期不能晚于最迟日期，请重新选择");
        this.clear();
      }
    }
    //发出搜索，并展示结果 TODO
    const courseDocs: CourseDoc[] = [];
    this.CourseDocService.getAllCourseDoc(
      pn, courseId,
      this.firstChooseForBeforeDate ? null : DateFormat.formatWithDay(this.beforeDate),
      this.firstChooseForAfterDate ? null : DateFormat.formatWithDay(this.afterDate)).subscribe(
      data => {
        //若成功返回数据，为元素赋值
        if (data['code'] === 100) {
          data['extend']['pageInfo']['list'].map(courseDoc => {
            courseDocs.push(CourseDoc.fromJSON(courseDoc));
          });
          this.courseDocs$ = of(courseDocs);
          this.pageInfo$ = of(data['extend']['pageInfo'])
        }
        //若发生错误
        else {
          alert("服务器响应错误")
        }
      }
      );
  }

}
