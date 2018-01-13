import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LabService } from '../../../core/lab.service';
import { Laboratory } from '../../../po/laboratory';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-lab-list',
  templateUrl: './lab-list.component.html',
  styleUrls: ['./lab-list.component.css']
})
export class LabListComponent implements OnInit {

  pageInfo$: Observable<any>;
  labs$: Observable<Laboratory[]>;

  constructor(
    private labService: LabService,
    private router: Router) { }

  /**
   * 进入页面时先请求数据
   */
  ngOnInit() {
    this.getAllLab();
  }

  /**
   * 请求实验室列表信息
   * @param pageNumber 页数
   * @param labName 实验室名称
   */
  getAllLab(pageNumber?, labName?){
    const labs: Laboratory[] = [];
    this.labService.getAllLab(pageNumber, labName).subscribe(
      data => {
        //若成功返回数据，为元素赋值
        if(data['code'] == 100){
          data['extend']['pageInfo']['list'].map(lab => {
            labs.push(Laboratory.fromJSON(lab));
          });
          this.labs$ = of(labs);
          this.pageInfo$ = of(data['extend']['pageInfo']);
        }
        //若发生错误
        else{
          alert("服务器响应错误")
        }
      }
    )
  }

  /**
   * 路由到服务新增页面
   */
  goToInsert(){
    this.router.navigate(['main/lab/insert']);
  }

}
