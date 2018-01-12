import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';

import { MsgService } from '../../../core/msg.service';

import { Message } from '../../../po/message';

@Component({
  selector: 'app-msg-detail',
  templateUrl: './msg-detail.component.html',
  styleUrls: ['./msg-detail.component.css']
})
export class MsgDetailComponent implements OnInit {

  msg$: Observable<Message>;

  constructor(
    private msgService: MsgService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) =>
      this.msgService.getOneMessage(params.get('id'))).subscribe(
      data => {
        //若服务器成功返回消息
        if (data['code'] === 100) {
          this.msg$ = of(data['extend']['info']);
        }
        //若发生错误，提示出错
        else {
          alert("发生错误");
        }
      }
      );
  }

  //返回消息列表
  goBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
