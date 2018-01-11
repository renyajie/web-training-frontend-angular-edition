import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { Laboratory } from '../../../po/laboratory';

@Component({
  selector: 'app-lab-insert',
  templateUrl: './lab-insert.component.html',
  styleUrls: ['./lab-insert.component.css']
})
export class LabInsertComponent implements OnInit {

  lab: Laboratory;

  // 初始化定义uploader变量,用来配置input中的uploader属性
  public uploader: FileUploader;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.lab = new Laboratory(null, '', null, '',null, '', null);
    this.uploader =  new FileUploader({
      url: "api/lab/add",
      method: "POST",
      itemAlias: "image",
      additionalParameter: {
        'lab': this.lab
      },
    });
  }

  ngOnInit() {

  }

  get diagnostic() { return JSON.stringify(this.lab); }

  /**
   * 提交数据
   */
  submitData(){
    //检查实验室数据的完备性
    if(this.lab.labName === null || this.lab.labName.length === 0) {
      alert("实验室名称不能为空");
      return;
    }
    if(this.lab.teacherId === null) {
      alert("教师编号不能为空");
      return;
    }
    if(this.lab.location === null || this.lab.location.length === 0) {
      alert("实验室地址不能为空");
      return;
    }
    if(this.lab.brief === null || this.lab.brief.length === 0) {
      alert("实验室简介不能为空");
      return;
    }
    if(!this.uploader.isFile) {
      alert("实验室图片未选择");
      return;
    }
    //提交数据
    this.uploader.uploadAll();
  }

  /**
   * 返回实验室列表
   */
  goToList(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
