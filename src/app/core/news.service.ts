import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable()
export class NewsService {

  url = 'api/news/';

  constructor(private httpClient: HttpClient) { }

  getAllNews(title?, before?, after?){
  }

  /**
   * 根据id获取新闻信息
   * @param id 新闻编号
   */
  getOneNews(id: number | string) {
    const params = new HttpParams()
      .set('id', id + '');
    const testUrl = this.url + 'get';
    return this.httpClient.get(testUrl, { params });
  }

}
