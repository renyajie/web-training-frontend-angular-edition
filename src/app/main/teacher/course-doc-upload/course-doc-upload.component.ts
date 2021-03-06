import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';

import { PersonInfoService } from '../../../core/person-info.service';
import { CourseService } from '../../../core/course.service';

import { CourseInfo } from '../../../po/course-info';

@Component({
  selector: 'app-course-doc-upload',
  templateUrl: './course-doc-upload.component.html',
  styleUrls: ['./course-doc-upload.component.css']
})
export class CourseDocUploadComponent implements OnInit {

  courseInfo$: Observable<CourseInfo[]>;
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
    private personInfoService: PersonInfoService,
    private courseService: CourseService) {
    this.teacherId = this.personInfoService.account;
  }

  ngOnInit() {
    //获取课程基本信息，用于下拉列表
    let courseInfos = [];
    this.courseService.getAllCourseBaseInfo().subscribe(
      data => {
        //若服务器成功返回数据
        if(data['code'] === 100) {
          data['extend']['info'].map(courseInfo => {
            courseInfos.push(CourseInfo.fromJSON(courseInfo));
          })
          //TODO removes
          console.log(courseInfos);
          this.courseInfo$ = of(courseInfos);
        }
        //若出错
        else {
          alert("服务器发生错误");
        }
      }
    )
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
    alert("教学文档上传成功");
    this.goToList();
  }

  /**
   * 返回教学文档上传页面
   */
  goToList() {
    this.router.navigate(['main/course-doc']);
  }

}
