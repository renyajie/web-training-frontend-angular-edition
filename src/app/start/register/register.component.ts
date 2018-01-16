import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../core/login.service';
import { Student } from '../../po/student';
import { Teacher } from '../../po/teacher';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isStudentRegister: number;
  teacher: Teacher;
  student: Student;

  constructor(
    private loginService: LoginService,
    private router: Router) {
    //默认为学生注册
    this.isStudentRegister = 1;
    this.teacher = new Teacher(null, null);
    this.student = new Student(null, null);
  }

  ngOnInit() {
  }

  get diagnosticForTeacher() { return JSON.stringify(this.teacher); }
  get diagnosticForStudent() { return JSON.stringify(this.student); }

  /**
   * 提交数据
   */
  submitData() {
    //若为学生注册
    if (this.isStudentRegister) {
      //检查数据的合法性
      if (this.student.stuName == null || this.student.stuName.length === 0) {
        alert("姓名不能为空");
        return;
      }
      if (this.student.passwd == null || this.student.passwd.length === 0) {
        alert("密码不能为空");
        return;
      }
      if (this.student.phone == null || this.student.phone.length === 0) {
        alert("手机号码不能为空");
        return;
      }
      if (this.student.classInfo == null || this.student.classInfo.length === 0) {
        alert("班级不能为空");
        return;
      }
      if (this.student.gender == null || this.student.gender.length === 0) {
        alert("性别不能为空");
        return;
      }
      if (this.student.major == null || this.student.major.length === 0) {
        alert("专业不能为空");
        return;
      }
      //提交数据
      this.loginService.studentRegister(this.student).subscribe(
        data => {
          //若服务器返回成功
          if (data['code'] === 100) {
            alert("注册信息成功");
            this.router.navigate(['start/login']);
          }
          else {
            //提示服务器返回的错误信息
            const errorFields = data['extend']['errorFields'];
            for (let msg of errorFields) {
              alert("服务器校验信息: " + msg);
            }
          }
        }
      )
    }
    //若为教师注册
    else {
      //检查数据的合法性
      if (this.teacher.teacherName == null || this.teacher.teacherName.length === 0) {
        alert("姓名不能为空");
        return;
      }
      if (this.teacher.passwd == null || this.teacher.passwd.length === 0) {
        alert("密码不能为空");
        return;
      }
      if (this.teacher.phone == null || this.teacher.phone.length === 0) {
        alert("手机不能为空");
        return;
      }
      if (this.teacher.job == null || this.teacher.job.length === 0) {
        alert("职称不能为空");
        return;
      }
      if (this.teacher.gender == null || this.teacher.gender.length === 0) {
        alert("性别不能为空");
        return;
      }
      if (this.teacher.office == null || this.teacher.office.length === 0) {
        alert("办公室不能为空");
        return;
      }
      if (this.teacher.major == null || this.teacher.major.length === 0) {
        alert("专业不能为空");
        return;
      }
      //提交数据
      this.loginService.teacherRegister(this.teacher).subscribe(
        data => {
          //若服务器返回成功
          if (data['code'] === 100) {
            alert("注册信息成功");
            this.router.navigate(['start/login']);
          }
          else {
            //提示服务器返回的错误信息
            let notices: string[] = ['teacherName', 'passwd', 'phone', 'job', 'gender', 'office', 'major'];
            const errorFields = data['extend']['errorFields'];
            for (let notice of notices) {
              if(errorFields[notice] != null) {
                alert(errorFields[notice]);
              }
            }
          }
        }
      )
    }
  }

  /**
   * 返回登录界面
   */
  goToLogin() {
    this.router.navigate(['start/login']);
  }

}
