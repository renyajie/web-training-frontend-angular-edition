import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { News } from '../po/news';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  tips: string[] = [
    'Angular使用HttpParams携带请求参数',
    'springmvc的@RequestParam接收的是Angular的HttpParams中的内容',
    'post方法可以使用body来携带(匿名)对象参数, springmvc要在pojo上加入@RequestBody来接收'
  ];
  url = 'api/test/';
  messages: string[] = [];

  constructor(private httpClient: HttpClient) {
    for(let i = 0; i < 7; i++){
      this.messages.push('消息带显示');
    }
  }

  ngOnInit() {
  }

  //简单获取json数据
  getSimpleMessage(){
    const testUrl = this.url + 'getSimpleMessage';
    this.httpClient.get(testUrl).subscribe(data => {
      this.messages[0] = data['extend']['info'];
    });
  }

  //带有参数的GET方法
  getSimpleMessageWithParams(){
    const params = new HttpParams()
    .set('name', 'ryj')
    .set('age', '21');
    const testUrl = this.url + 'getSimpleMessageWithParams';
    this.httpClient.get(testUrl, {params}).subscribe(data => {
      this.messages[1] = `Message: ${data['msg']}, extend: ${data['extend']['info']}`;
    })
  }

  //请求一个对象
  getSimpleObject() {
    const params = new HttpParams()
    .set('id', '1');
    const testUrl = this.url + 'getSimpleObject';
    this.httpClient.get(testUrl, {params}).subscribe(data => {
      const news: News = News.fromJSON(data['extend']['info']);
      this.messages[2] = `接收到的对象是${news}`;
    })
  }

  //请求一个对象列表
  getObjectList() {
    const testUrl = this.url + 'getObjectList';
    this.httpClient.get(testUrl).subscribe(data => {
      const newses: News[] = [];
       data['extend']['info'].map(news => newses.push(News.fromJSON(news)));
      this.messages[3] = `接收到的对象数组: ${newses}`;
    });
  }

  // POST方法，直接通过匿名的语法向服务器提交一个对象
  postMessage() {
    const testUrl = this.url + 'postMessage';
    this.httpClient.post(testUrl, {
      'code': '100',
      'msg': '2333'
    }).subscribe(
      data => {
        this.messages[4]
          = `Message: ${data['message']}, extend: ${data['extend']['info']['msg']}`;
      }
    );
  }


}
