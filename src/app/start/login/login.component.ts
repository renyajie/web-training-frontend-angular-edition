import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../core/login.service';
import { PersonInfoService } from '../../core/person-info.service';

import { Student } from '../../po/student';
import { Teacher } from '../../po/teacher';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  //判断用户选择的登录身份
  isStudent: number;
  account: string;
  passwd: string;

  constructor(
    public router: Router,
    public loginService: LoginService,
    public personInfoService: PersonInfoService) {
    this.isStudent = 1;
  }

  get diagnostic() { return JSON.stringify('account: ' + this.account + ', passwd: ' + this.passwd); }

  ngOnInit() {

  }

  //登录方法
  login() {
    //判断账号密码是否为空
    if (this.account == null || this.account.length == 0) {
      alert("账号不能为空");
      return;
    }
    if (this.passwd == null || this.passwd.length == 0) {
      alert("密码不能为空");
      return;
    }
    //根据用户身份选择登录
    if (this.isStudent) {
      this.loginService.studentLogin({ stuId: +this.account, passwd: this.passwd } as Student)
        .subscribe(
        data => {
          //若登陆成功，保存身份信息，并跳转主页面
          if (data['code'] == 100) {
            this.personInfoService.isStudent = true;
            this.personInfoService.student = Student.fromJSON(data['extend']['info']);
            this.personInfoService.account = this.personInfoService.student.stuId;
            console.log(this.personInfoService.student);
            this.router.navigate(['main']);
          }
          //若失败，提示失败
          else {
            alert("登录信息错误")
          }
        }
        )
    } else {
      this.loginService.teacherLogin({ teacherId: +this.account, passwd: this.passwd } as Teacher)
        .subscribe(
        data => {
          //若登陆成功，保存身份信息，并跳转主页面
          if (data['code'] == 100) {
            this.personInfoService.isStudent = false;
            this.personInfoService.teacher = Teacher.fromJSON(data['extend']['info']);
            this.personInfoService.account = this.personInfoService.teacher.teacherId;
            console.log(this.personInfoService.teacher);
            this.router.navigate(['main']);
          }
          //若失败，提示失败
          else {
            alert("登录信息错误")
          }
        }
        )
    }

  }

  //注册方法
  register() {
    this.router.navigate(['start/register']);
  }

}
