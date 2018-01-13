import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { PersonInfoService } from './person-info.service';

import { ExpDocReq } from '../po/exp-doc-req';

@Injectable()
export class ExpDocService {

  url = 'api/ex_req/';

  constructor(
    private httpClient: HttpClient,
    private personInfoService: PersonInfoService
  ) { }

  /**
   * 新增一个实验报告要求记录
   * @param expDocReq 实验报告要求记录 
   */
  addOneExpDocReq(expDocReq: ExpDocReq) {
    let tmp: ExpDocReq = new ExpDocReq(null, null, null, null, null, null, null);
    tmp = Object.assign(tmp, expDocReq);
    const testUrl = this.url + 'add';
    return this.httpClient.post(testUrl, tmp);
  }

  /**
   * 根据用户的身份信息获取对应的实验报告要求
   * @param pn 页数
   * @param title 标题
   * @param courseId 课程编号
   * @param before 大于等于此日期
   * @param after 小于等于此日期
   */
  getAllRequirement(pn?, title?, courseId?, before?, after?) {
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
        .set('title', title ? title : '')
        .set('before', before)
        .set('after', after);
    }
    if (before === null && after === null) {
      params = new HttpParams()
        .set('pn', pn ? pn : '')
        .set(personIdName, personId)
        .set('courseId', courseId ? courseId : '')
        .set('title', title ? title : '')
    }
    if (before === null && after != null) {
      params = new HttpParams()
        .set('pn', pn ? pn : '')
        .set(personIdName, personId)
        .set('courseId', courseId ? courseId : '')
        .set('title', title ? title : '')
        .set('after', after);
    }
    if (before != null && after === null) {
      params = new HttpParams()
        .set('pn', pn ? pn : '')
        .set(personIdName, personId)
        .set('courseId', courseId ? courseId : '')
        .set('title', title ? title : '')
        .set('before', before);
    }
    return this.httpClient.get(testUrl, { params });
  }

}
