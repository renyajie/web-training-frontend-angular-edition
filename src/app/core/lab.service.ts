import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LabService {

  url = 'api/lab/';

  constructor(private httpClient: HttpClient) { }

  /**
   * 获取所有的实验室数据
   * @param pageNumber 第几页 
   * @param labName 实验室名称模糊搜索
   */
  getAllLab(pageNumber?, labName?){
    const params = new HttpParams();
    if(pageNumber != null) {
       params.set('pn', pageNumber);
    }
    if(labName != null){
      params.set('labName', labName);
    }
    const testUrl = this.url + 'getAll';
    return this.httpClient.get(testUrl, {params});
  }

}
