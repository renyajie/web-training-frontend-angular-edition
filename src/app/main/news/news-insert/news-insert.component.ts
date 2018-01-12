import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NewsService } from '../../../core/news.service';
import { News } from '../../../po/news';

@Component({
  selector: 'app-news-insert',
  templateUrl: './news-insert.component.html',
  styleUrls: ['./news-insert.component.css']
})
export class NewsInsertComponent implements OnInit {

  news: News;

  constructor(
    private router: Router,
    private newsService: NewsService
  ) { 
    this.news = new News(null, null, null, null, null, null);
  }

  ngOnInit() {

  }

  get diagnostic() { return JSON.stringify(this.news); }

  submitData(){
    //检查数据的完备性
    if(this.news.title == null || this.news.title.length == 0) {
      alert("新闻标题不能为空");
    }
    if(this.news.path == null || this.news.path.length == 0) {
      alert("新闻内容不能为空");
    }
    if(this.news.publisherId == null) {
      alert("发布人编号不能为空");
    }
    //提交数据
    this.newsService.addOneNew(this.news).subscribe(
      data => {
        if(data['code'] === 100) {
          alert("提交成功");
          this.goToList();
        }
        else{
          //提示服务器返回的错误信息
          const errorFields = data['extend']['errorFields'];
          if(errorFields['title'] != null) {
            alert("服务器校验: 新闻标题不能为空");
          }
          if(errorFields['publisherId'] != null) {
            alert("服务器校验: 发布人编号不能为空");
          }
          if(errorFields['path'] != null) {
            alert("服务器校验: 新闻内容不能为空");
          }
        }
      }
    )
  }

  
  goToList(){
    this.router.navigate(['main/news']);
  }

}
