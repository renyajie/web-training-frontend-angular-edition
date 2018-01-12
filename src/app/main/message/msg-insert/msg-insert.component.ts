import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MsgService } from '../../../core/msg.service';
import { PersonInfoService } from '../../../core/person-info.service';

import { Message } from '../../../po/message';

@Component({
  selector: 'app-msg-insert',
  templateUrl: './msg-insert.component.html',
  styleUrls: ['./msg-insert.component.css']
})
export class MsgInsertComponent implements OnInit {

  msg: Message;
  courseId =  '';

  constructor(
    private router: Router,
    private msgService: MsgService,
    private personService: PersonInfoService
  ) { 
    this.msg = new Message(null, null, null, null, null, null);
    this.msg.publisherId = this.personService.account;
  }

  ngOnInit() {
  }

  get diagnostic() { return JSON.stringify(this.msg); }

  submitData(){
    //检查数据的完备性
    if(this.msg.title == null || this.msg.title.length == 0) {
      alert("通知的标题不能为空");
    }
    if(this.msg.path == null || this.msg.path.length == 0) {
      alert("通知的内容不能为空");
    }
    if(this.courseId == null || this.courseId.length == 0) {
      alert("课程编号不能为空");
    }
    //提交数据
    this.msgService.addOneMessage(this.msg, this.courseId).subscribe(
      data => {
        if(data['code'] === 100) {
          alert("提交成功");
          this.goToList();
        }
        else{
          //提示服务器返回的错误信息
          const errorFields = data['extend']['errorFields'];
          if(errorFields['title'] != null) {
            alert("服务器校验: 通知标题不能为空");
          }
          if(errorFields['publisherId'] != null) {
            alert("服务器校验: 发布人编号不能为空");
          }
          if(errorFields['path'] != null) {
            alert("服务器校验: 通知内容不能为空");
          }
        }
      }
    )
  }

  goToList(){
    this.router.navigate(['main/msg']);
  }

}
