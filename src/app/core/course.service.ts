import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { PersonInfoService } from './person-info.service';

import { Course } from '../po/course';
import { CourseResult } from '../po/course-result';
import { CourseAux } from '../po/course-aux';

@Injectable()
export class CourseService {

  url = 'api/course/';

  constructor(
    private httpClient: HttpClient,
    private personInfoService: PersonInfoService) { }

  /**
   * 根据用户的编号获取所有的课程信息
   * @param courseId 课程编号
   */
  getAllCourse(courseId?) {
    //根据用户登录信息获取用户身份参数
    let isStudent = this.personInfoService.isStudent;
    let personId = this.personInfoService.account + '';
    //根据请求者的身份构造不同的url和请求参数
    let personIdName = '';
    let testUrl = '';
    if (isStudent) {
      personIdName = 'studentId';
      testUrl = this.url + 'getForTeacher';
    } else {
      personIdName = 'teacherId';
      testUrl = this.url + 'getForTeacher';
    }
    const params = new HttpParams()
      .set(personIdName, personId)
      .set('courseId', courseId ? courseId : '');
    return this.httpClient.get(testUrl, { params });
  }

  /**
   * 添加一个课程信息
   * @param course 课程信息
   */
  addOneCourse(course: Course) {
    let tmp: Course = new Course(null, null, null, null, null, null, null, null);
    tmp = Object.assign(tmp, course);
    const testUrl = this.url + 'add';
    this.httpClient.post(testUrl, course);
  }

  /**
   * 计算课表中间数据CourseAux,用于生成课程表
   * @param courseResults 服务器查询到的课程信息
   */
  calculateCourseTable(courseResults: CourseResult[]): CourseAux[][] {
    //元素初始化，数组角标都增加1，便于阅读更直观
    let middenDate: CourseAux[][] = [[]];
    for(var i = 0; i < 12; i++) {
      middenDate[i] = [];
      for(var j = 0; j < 7; j++) {
        middenDate[i].push(new CourseAux());
      }
    }
    console.log(middenDate);
    courseResults.map(result => {
      //设置课程表单元格的显示或隐藏
      let weekday = result.weekday;
      let startCourse = result.startCourseTime;
      let endCourse = result.endCourseTime;
      for (var i = startCourse + 1; i <= endCourse; i++) {
        middenDate[i - 1][weekday - 1].isOccupied = true;
      }
      //设置单元格占据长度
      middenDate[startCourse - 1][weekday - 1].rowSpan = endCourse - startCourse + 1;
      //生成单元格内文本
      middenDate[startCourse - 1][weekday - 1] = this.generateCourseTableContent(result, middenDate[startCourse - 1][weekday - 1]);
      console.log("weekday---startCourseTime: " + middenDate[startCourse - 1][weekday - 1]);
    })
    return middenDate;
  }

  /**
   * 生成课表单元格内的文本
   * @param result 课表信息
   */
  generateCourseTableContent(result: CourseResult, aux: CourseAux): CourseAux {
    let weekdayString: string[] = [
      '周一', '周二', '周三', '周四', '周五', '周六', '周日'
    ];
    let courseName = result.courseName;
    let teacherName = result.teacherName;
    let weekday = result.weekday;
    let startWeek = result.startWeek;
    let startCourseTime = result.startCourseTime;
    let endCourseTime = result.endCourseTime;
    let endWeek = result.endWeek;
    let labName = result.labName;
    //第一行---课程名称
    let rowOne = courseName;
    //第二行---上课时间
    let rowTwo = weekdayString[weekday - 1]  + '第'; //+ 
    for(var i = startCourseTime; i <= endCourseTime; i++){
      rowTwo = rowTwo + i;
      if(i < endCourseTime) {
        rowTwo = rowTwo + ',';
      }
    }
    rowTwo = rowTwo + '节' + '{第' + startWeek + '-' + endWeek + '周}';
    //第三行---教师名称
    let rowThree = teacherName;
    //第四行---实验室名称
    let rowFour = labName;
    aux.rowOne = rowOne;
    aux.rowTwo = rowTwo;
    aux.rowThree = rowThree;
    aux.rowFour = rowFour;
    return aux;
  }

}
