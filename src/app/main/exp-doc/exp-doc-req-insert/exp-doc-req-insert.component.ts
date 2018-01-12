import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ExpDocService } from '../../../core/exp-doc.service';
import { PersonInfoService } from '../../../core/person-info.service';

import { ExpDocReq } from '../../../po/exp-doc-req';

@Component({
  selector: 'app-exp-doc-req-insert',
  templateUrl: './exp-doc-req-insert.component.html',
  styleUrls: ['./exp-doc-req-insert.component.css']
})
export class ExpDocReqInsertComponent implements OnInit {

  expDocReq: ExpDocReq;

  constructor(
    private router: Router,
    private expDocService: ExpDocService,
    private personService: PersonInfoService
  ) { 
    this.expDocReq = new ExpDocReq(null, null, null, null, null, null, null);
    this.expDocReq.teacherId = this.personService.account;
  }

  ngOnInit() {
  }

  get diagnostic() { return JSON.stringify(this.expDocReq); }

  submitData(){
    //检查数据的完备性
    if(this.expDocReq.title == null || this.expDocReq.title.length == 0) {
      alert("实验报告要求的标题不能为空");
    }
    if(this.expDocReq.courseId == null) {
      alert("课程编号不能为空");
    }
    if(this.expDocReq.deadline == null) {
      alert("截止日期不能为空");
    }
    if(this.expDocReq.info == null || this.expDocReq.info.length == 0) {
      alert("实验报告要求的内容不能为空");
    }  
    //提交数据
    this.expDocService.addOneExpDocReq(this.expDocReq).subscribe(
      data => {
        if(data['code'] === 100) {
          alert("提交成功");
          this.goToList();
        }
        else{
          //提示服务器返回的错误信息
          const errorFields = data['extend']['errorFields'];
          if(errorFields['title'] != null) {
            alert("服务器校验: 标题不能为空");
          }
          if(errorFields['courseId'] != null) {
            alert("服务器校验: 课程编号不能为空");
          }
          if(errorFields['deadline'] != null) {
            alert("服务器校验: 截止日期不能为空");
          }
          if(errorFields['info'] != null) {
            alert("服务器校验: 内容不能为空");
          }
        }
      }
    )
  }

  goToList(){
    this.router.navigate(['main/msg']);
  }

}
