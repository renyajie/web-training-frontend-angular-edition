import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { PersonInfoService } from './person-info.service';

import { CourseDoc } from '../po/course-doc';

@Injectable()
export class CourseDocService {

  url = 'api/courseDoc/';

  constructor(
    private httpClient: HttpClient,
    private personInfoService: PersonInfoService
  ) { }

  /**
   * 获取所有的教学文档记录
   * @param pn 页数
   * @param courseId 课程编号 
   * @param before 大于等于此日期
   * @param after 小于等于此日期
   */
  getAllCourseDoc(pn?, courseId?, before?, after?){
    //根据用户登录信息获取用户身份参数
    let isStudent = this.personInfoService.isStudent;
    let personId = this.personInfoService.account + '';
    //根据请求者的身份构造不同的url和请求参数
    let personIdName = '';
    let testUrl = '';
    if (isStudent) {
      personIdName = 'studentId';
      testUrl = this.url + 'getAllForStudent';
    } else {
      personIdName = 'teacherId';
      testUrl = this.url + 'getAllForTeacher';
    }
    let params: HttpParams;
    if (before != null && after != null) {
      params = new HttpParams()
        .set('pn', pn ? pn : '')
        .set(personIdName, personId)
        .set('courseId', courseId ? courseId : '')
        .set('before', before)
        .set('after', after);
    }
    if (before === null && after === null) {
      params = new HttpParams()
        .set('pn', pn ? pn : '')
        .set(personIdName, personId)
        .set('courseId', courseId ? courseId : '');
    }
    if (before === null && after != null) {
      params = new HttpParams()
        .set('pn', pn ? pn : '')
        .set(personIdName, personId)
        .set('courseId', courseId ? courseId : '')
        .set('after', after);
    }
    if (before != null && after === null) {
      params = new HttpParams()
        .set('pn', pn ? pn : '')
        .set(personIdName, personId)
        .set('courseId', courseId ? courseId : '')
        .set('before', before);
    }
    return this.httpClient.get(testUrl, { params });
  }

  /**
   * 删除教学文档记录
   * @param id 教学文档编号 
   */
  deleteCourseDoc(id) {
    const params = new HttpParams()
    .set('ids', id);
    const testUrl = this.url + 'delete';
    return this.httpClient.delete(testUrl, { params });
  }
}
