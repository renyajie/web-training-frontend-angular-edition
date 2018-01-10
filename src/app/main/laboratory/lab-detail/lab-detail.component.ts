import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-lab-detail',
  templateUrl: './lab-detail.component.html',
  styleUrls: ['./lab-detail.component.css']
})
export class LabDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

  }

  //返回实验室列表
  goBack(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
