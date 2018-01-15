import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';

import { PersonInfoService } from '../../../core/person-info.service';

@Component({
  selector: 'app-exp-doc-add',
  templateUrl: './exp-doc-add.component.html',
  styleUrls: ['./exp-doc-add.component.css']
})
export class ExpDocAddComponent implements OnInit {

  courseId = '';
  stuId: number;

  // 初始化定义uploader变量,用来配置input中的uploader属性
  public uploader: FileUploader = new FileUploader({
    url: "api/exp/add",
    method: "POST",
    itemAlias: "file"
  });

  constructor(
    private router: Router,
    private personInfoService: PersonInfoService) { 
      this.stuId = this.personInfoService.account;
    }

  ngOnInit() {
  }

  get diagnostic() { return JSON.stringify(this.courseId); }

  /**
   * 提交数据
   */
  submitData() {
    //检查上传文档数据的完备性
    if (this.courseId.length === 0) {
      alert("课程编号不能为空");
      return;
    }
    if (!this.uploader.isFile) {
      alert("未选择实验报告");
      return;
    }
    this.uploader.setOptions({
      url: "api/exp/add",
      method: "POST",
      itemAlias: "file",
      additionalParameter: {
        //这个不是httpClient方法，只能把字段名分开提交，而且服务器不能用requestBody接收
        'courseId': this.courseId,
        'stuId': this.stuId
      }
    });
    //提交数据
    this.uploader.uploadAll();
    alert("实验报告上传成功");
    this.goToList();
  }

  /**
   * 返回实验报告上传页面
   */
  goToList() {
    this.router.navigate(['main/exp-doc/upload']);
  }

}
