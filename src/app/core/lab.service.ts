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
  getAllLab(pageNumber?: string, labName?:string){
    let params: HttpParams;
    if(pageNumber != null && labName != null) {
      params = new HttpParams()
      .set('pn', pageNumber)
      .set('labName', labName);
    }
    if(pageNumber != null && labName == null) {
      params = new HttpParams()
      .set('pn', pageNumber);
    }
    if(pageNumber == null && labName != null) {
      params = new HttpParams()
      .set('labName', labName);;
    }
    if(pageNumber == null && labName == null) {
      params = new HttpParams();
    }
    console.log(`pageNumber is ${pageNumber}, labName is ${labName}`);
    const testUrl = this.url + 'getAll';
    return this.httpClient.get(testUrl, {params});
  }

}
