import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { PersonInfoService } from './person-info.service';

import { Message } from '../po/message';

@Injectable()
export class MsgService {

  url = 'api/message/';

  constructor(
    private httpClient: HttpClient,
    private personInfoService: PersonInfoService) { }

  /**
   * 教师获取自己的消息记录
   * @param publisherId 发布者编号 
   * @param courseId 课程编号
   * @param title 标题
   * @param before 在此日期之前
   * @param after 在此日期之后
   */
  getAllMessage(pn?, title?, courseId?, before?, after?) {
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
      personIdName = 'publisherId';
      testUrl = this.url + 'getAllForTeacher';
    }
    let params: HttpParams;
    if (before != null && after != null) {
      params = new HttpParams()
        .set('pn', pn ? pn : '')
        .set(personIdName, personId ? personId : '')
        .set('courseId', courseId ? courseId : '')
        .set('title', title ? title : '')
        .set('before', before)
        .set('after', after);
    }
    if (before === null && after === null) {
      params = new HttpParams()
        .set('pn', pn ? pn : '')
        .set(personIdName, personId ? personId : '')
        .set('courseId', courseId ? courseId : '')
        .set('title', title ? title : '')
    }
    if (before === null && after != null) {
      params = new HttpParams()
        .set('pn', pn ? pn : '')
        .set(personIdName, personId ? personId : '')
        .set('courseId', courseId ? courseId : '')
        .set('title', title ? title : '')
        .set('after', after);
    }
    if (before != null && after === null) {
      params = new HttpParams()
        .set('pn', pn ? pn : '')
        .set(personIdName, personId ? personId : '')
        .set('courseId', courseId ? courseId : '')
        .set('title', title ? title : '')
        .set('before', before);
    }
    return this.httpClient.get(testUrl, { params });
  }

  /**
   * 获取指定id的消息
   * @param id 消息编号 
   */
  getOneMessage(id: number | string) {
    const params = new HttpParams()
      .set('id', id + '');
    const testUrl = this.url + 'get';
    return this.httpClient.get(testUrl, { params });
  }

  /**
   * 教师添加一个消息
   * @param msg 
   */
  addOneMessage(msg: Message, courseId) {
    let tmp: Message = new Message(null, null, null, null, null, null);
    tmp = Object.assign(tmp, msg);
    const testUrl = this.url + 'add';
    const params = new HttpParams()
    .set('courseId', courseId);
    return this.httpClient.post(testUrl, tmp, {params});
  }

}
