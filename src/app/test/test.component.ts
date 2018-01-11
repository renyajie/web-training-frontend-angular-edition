import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { FileUploader } from 'ng2-file-upload';
import 'rxjs/add/operator/map';

import { DateFormat } from '../utility/date-format';
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
  submitted = false;
  timeString = '';
  messages: string[] = [];

  constructor(private httpClient: HttpClient) {
    for (let i = 0; i < 9; i++) {
      this.messages.push('消息带显示');
    }
  }

  ngOnInit() {
  }

  testTime() {
    this.timeString = DateFormat.format(new Date());
  }

  //简单获取json数据
  getSimpleMessage() {
    const testUrl = this.url + 'getSimpleMessage';
    this.httpClient.get(testUrl).subscribe(data => {
      this.messages[0] = data['extend']['info'];
    });
  }

  //带有参数的GET方法
  getSimpleMessageWithParams() {
    const params = new HttpParams()
      .set('name', 'ryj')
      .set('age', '21');
    const testUrl = this.url + 'getSimpleMessageWithParams';
    this.httpClient.get(testUrl, { params }).subscribe(data => {
      this.messages[1] = `Message: ${data['msg']}, extend: ${data['extend']['info']}`;
    })
  }

  //请求一个对象
  getSimpleObject() {
    const params = new HttpParams()
      .set('id', '1');
    const testUrl = this.url + 'getSimpleObject';
    this.httpClient.get(testUrl, { params }).subscribe(data => {
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
          = `Message: ${data['msg']}, extend: ${data['extend']['info']['msg']}`;
      }
      );
  }

  model = new News(1, DateFormat.format(new Date()), '233', '233服务器', 100);

  onSubmit() {
    this.submitted = true;
  }

  newNews() {
    this.model = new News(null, null, null, null, null);
  }


  //提交表单信息
  postForm() {

    const testUrl = this.url + 'postForm';
    this.httpClient.post(testUrl, this.model).subscribe(
      data => {
        this.messages[5]
          = `Message: ${data['msg']}, extend: ${data['extend']['info']}`;
      }
    );
  }

  // 携带参数的Delete方法
  deleteMessage(value: string) {
    const params = new HttpParams()
      .set('params', value);
    const testUrl = this.url + 'deleteMessage';
    this.httpClient.delete(testUrl, { params }).subscribe(
      data => {
        this.messages[6]
          = `Message: ${data['msg']}, extend: ${data['extend']['info']}`;
      }
    );
  }

  // 携带参数的Put方法，可以携带body
  putMessage(value: string) {
    const params = new HttpParams()
      .set('params', value);
    const testUrl = this.url + 'putMessage';
    this.httpClient.put(testUrl, {
      'title': 'ryj'
    }, { params }).subscribe(
      data => {
        this.messages[7]
          = `Message: ${data['message']}, extend: ${data['extend']['info']}`;
      }
      );
  }

  // 初始化定义uploader变量,用来配置input中的uploader属性
  public uploader: FileUploader = new FileUploader({
    url: "api/test/upload/add",
    method: "POST",
    itemAlias: "file",
    additionalParameter: {
      'description': '233'
    }
  });

  
  
}

