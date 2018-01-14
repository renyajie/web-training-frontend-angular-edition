import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { PersonInfoService } from './person-info.service';

import { Course } from '../po/course';
import { CourseResult } from '../po/course-result';

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
    this.httpClient.get(testUrl, { params });
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

}
