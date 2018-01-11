import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';

import { LabService } from '../../../core/lab.service';

import { Laboratory } from '../../../po/laboratory';

@Component({
  selector: 'app-lab-detail',
  templateUrl: './lab-detail.component.html',
  styleUrls: ['./lab-detail.component.css']
})
export class LabDetailComponent implements OnInit {

  lab$: Observable<Laboratory>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private labService: LabService
  ) { }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) =>
      this.labService.getOneLab(params.get('id'))).subscribe(
      data => {
        //若服务器成功返回消息
        if (data['code'] === 100) {
          this.lab$ = of(data['extend']['info']);
        }
        //若发生错误，提示出错
        else {
          alert("发生错误");
        }
      }
      );
  }

  //返回实验室列表
  goBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
