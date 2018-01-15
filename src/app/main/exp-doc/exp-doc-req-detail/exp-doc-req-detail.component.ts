import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';

import { ExpDocReqService } from '../../../core/exp-doc-req.service';

import { ExpDocReqForTeacher } from '../../../po/exp-doc-req-teacher';

@Component({
  selector: 'app-exp-doc-req-detail',
  templateUrl: './exp-doc-req-detail.component.html',
  styleUrls: ['./exp-doc-req-detail.component.css']
})
export class ExpDocReqDetailComponent implements OnInit {

  req$: Observable<ExpDocReqForTeacher>;

  constructor(
    private expDocService: ExpDocReqService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) =>
      this.expDocService.getOneExpDocReq(params.get('id'))).subscribe(
      data => {
        //若服务器成功返回消息
        if (data['code'] === 100) {
          this.req$ = of(data['extend']['info']);
        }
        //若发生错误，提示出错
        else {
          alert("发生错误");
        }
      }
      );
  }

  //返回实验报告要求列表
  goBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
