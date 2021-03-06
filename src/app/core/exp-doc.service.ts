import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { PersonInfoService } from './person-info.service';

import { ExpDoc } from '../po/exp-doc';

@Injectable()
export class ExpDocService {

  url = 'api/exp/';

  constructor(
    private httpClient: HttpClient,
    private personInfoService: PersonInfoService
  ) { }
  
  /**
   * 根据用户的身份信息获取对应的实验报告上传记录
   * @param pn 页数
   * @param courseId 课程编号 
   * @param before 大于等于此日期
   * @param after 小于等于此日期
   */
  getAllExpDoc(pn?, courseId?, before?, after?){
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
}
