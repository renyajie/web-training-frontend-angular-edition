import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  tips: string[] = [
    '目前没有'
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

  getSimpleMessage(){
    const testUrl = this.url + 'getSimpleMessage';
    this.httpClient.get(testUrl).subscribe(data => {
      this.messages[0] = data['extend']['info'];
    });
  }

}
