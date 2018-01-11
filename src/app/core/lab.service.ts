import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { FileUploader } from 'ng2-file-upload';

import { Laboratory } from '../po/laboratory';

@Injectable()
export class LabService {

  url = 'api/lab/';

  constructor(private httpClient: HttpClient) { }

  /**
   * 获取所有的实验室数据
   * @param pageNumber 第几页 
   * @param labName 实验室名称模糊搜索
   * @returns 服务器返回的数据
   */
  getAllLab(pageNumber?: string, labName?: string) {
    let params: HttpParams;
    if (pageNumber != null && labName != null) {
      params = new HttpParams()
        .set('pn', pageNumber)
        .set('labName', labName);
    }
    if (pageNumber != null && labName == null) {
      params = new HttpParams()
        .set('pn', pageNumber);
    }
    if (pageNumber == null && labName != null) {
      params = new HttpParams()
        .set('labName', labName);;
    }
    if (pageNumber == null && labName == null) {
      params = new HttpParams();
    }
    console.log(`pageNumber is ${pageNumber}, labName is ${labName}`);
    const testUrl = this.url + 'getAll';
    return this.httpClient.get(testUrl, { params });
  }

  /**
   * 根据编号请求实验室的具体信息
   * @param id 实验室编号
   * @returns 服务器返回的数据
   */
  getOneLab(id: number | string) {
    const params = new HttpParams()
      .set('id', id + '');
    const testUrl = this.url + 'get';
    return this.httpClient.get(testUrl, { params });
  }

}
