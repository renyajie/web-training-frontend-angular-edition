import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';

import { PersonInfoService } from '../../../core/person-info.service';

@Component({
  selector: 'app-course-doc-upload',
  templateUrl: './course-doc-upload.component.html',
  styleUrls: ['./course-doc-upload.component.css']
})
export class CourseDocUploadComponent implements OnInit {

  courseId = '';
  teacherId: number;

  // 初始化定义uploader变量,用来配置input中的uploader属性
  public uploader: FileUploader = new FileUploader({
    url: "api/courseDoc/add",
    method: "POST",
    itemAlias: "file"
  });

  constructor(
    private router: Router,
    private personInfoService: PersonInfoService) {
    this.teacherId = this.personInfoService.account;
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
      alert("实验室名称不能为空");
      return;
    }
    if (!this.uploader.isFile) {
      alert("未选择教学文档");
      return;
    }
    this.uploader.setOptions({
      url: "api/courseDoc/add",
      method: "POST",
      itemAlias: "file",
      additionalParameter: {
        //这个不是httpClient方法，只能把字段名分开提交，而且服务器不能用requestBody接收
        'courseId': this.courseId,
        'teacherId': this.teacherId
      }
    });
    //提交数据
    this.uploader.uploadAll();
    this.goToList();
  }

  /**
   * 返回教学文档上传页面
   */
  goToList() {
    this.router.navigate(['main/teacher/add-course']);
  }

}
