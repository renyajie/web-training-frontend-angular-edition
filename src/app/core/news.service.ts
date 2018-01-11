import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable()
export class NewsService {

  url = 'api/news/';

  constructor(private httpClient: HttpClient) { }

  /**
   * 多条件查询新闻列表
   * @param title 新闻标题
   * @param before 大于等于此日期
   * @param after 小于等于此日期
   */
  getAllNews(pn?: string, title?: string, before?: string, after?: string){
    const params = new HttpParams()
    .set('pn', pn ? pn : '')
    .set('title', title ? title : '')
    .set('before', before ? before : '')
    .set('after', after ? after : '');
    const testUrl = this.url + 'getAll';
    return this.httpClient.get(testUrl, { params });
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
