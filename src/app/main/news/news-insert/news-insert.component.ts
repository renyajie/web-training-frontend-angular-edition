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

  submitDate(){
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
          alert("服务器发生错误");
        }
      }
    )
  }

  
  goToList(){
    this.router.navigate(['main/news']);
  }

}
