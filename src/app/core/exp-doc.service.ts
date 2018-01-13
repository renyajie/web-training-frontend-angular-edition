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

}
