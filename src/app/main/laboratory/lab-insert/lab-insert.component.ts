import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';
import { Laboratory } from '../../../po/laboratory';

@Component({
  selector: 'app-lab-insert',
  templateUrl: './lab-insert.component.html',
  styleUrls: ['./lab-insert.component.css']
})
export class LabInsertComponent implements OnInit {

  lab: Laboratory = new Laboratory(null, '', null, '', null, '', null);

  // 初始化定义uploader变量,用来配置input中的uploader属性
  public uploader: FileUploader = new FileUploader({
    url: "api/lab/add",
    method: "POST",
    itemAlias: "image"
  });

  constructor(private router: Router) { }

  ngOnInit() {

  }

  get diagnostic() { return JSON.stringify(this.lab); }

  /**
   * 提交数据
   */
  submitData() {
    //检查实验室数据的完备性
    if (this.lab.labName === null || this.lab.labName.length === 0) {
      alert("实验室名称不能为空");
      return;
    }
    if (this.lab.teacherId === null) {
      alert("教师编号不能为空");
      return;
    }
    if (this.lab.location === null || this.lab.location.length === 0) {
      alert("实验室地址不能为空");
      return;
    }
    if (this.lab.brief === null || this.lab.brief.length === 0) {
      alert("实验室简介不能为空");
      return;
    }
    if (!this.uploader.isFile) {
      alert("实验室图片未选择");
      return;
    }
    this.uploader.setOptions({
      url: "api/lab/add",
      method: "POST",
      itemAlias: "image",
      additionalParameter: {
        //这个不是httpClient方法，只能把字段名分开提交，而且服务器不能用requestBody接收
        'labName': this.lab.labName,
        'teacherId': this.lab.teacherId + '',
        'location': this.lab.location,
        'brief': this.lab.brief
      }
    });
    //提交数据
    this.uploader.uploadAll();
    this.goToList();
  }

  /**
   * 返回实验室列表
   */
  goToList() {
    this.router.navigate(['main/lab']);
  }

}
