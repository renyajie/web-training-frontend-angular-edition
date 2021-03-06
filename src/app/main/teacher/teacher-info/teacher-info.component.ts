import { Component, OnInit } from '@angular/core';
import { DatepickerModule } from 'ngx-bootstrap';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { PersonInfoService } from '../../../core/person-info.service';

import { DateFormat } from '../../../utility/date-format';
import { Teacher } from '../../../po/teacher';

@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.css']
})
export class TeacherInfoComponent implements OnInit {

  teacher$: Observable<Teacher>;

  private _birthText = '';
  //判断用户是否尚未选择生日
  birthUntouched = true;
  //日期选择框文本
  birthBtnText = '选择生日日期';
  //是否显示日期选择框
  showBirth = false;
  //用户选择的最早日期和最晚日期
  birth: Date;
  //当前日期，最大可选日期和最小可选日期
  current: Date;
  maxDate: Date;
  minDate: Date;

  constructor(private personInfoService: PersonInfoService) { 
    //用到的参数一定要初始化，你无法预知你会什么时候调用它。
    this.birth = new Date();
    this.current = new Date();
    this.maxDate = new Date();
    this.minDate = new Date();
    //设置最大可选日期是今天，最小可选日期是80年前
    this.maxDate.setDate(this.current.getDate());
    this.minDate.setDate(this.current.getDate() - 80 * 365);
  }

  ngOnInit() {
    let teacher: Teacher;
    this.personInfoService.getPersonInfo().subscribe(
      data => {
        //若服务器成功返回信息
        if(data['code'] === 100) {
          teacher = Teacher.fromJSON(data['extend']['info']);
          console.log(teacher);
          //若未选择生日
          if(teacher.birth == null || teacher.birth.length == 0) {
            this.birthText = '未选择生日';
          }else {
            this.birthText = teacher.birth;
          }
          this.teacher$ = of(teacher);
        }
        //若发生错误
        else {
          alert("服务器发生错误");
        }
      }
    )
  }


  showBirthPicker(event: any) {
    if(this.birthUntouched === true) {
      this.birthUntouched = false;
    }
    this.showBirth = !this.showBirth;
    this.birthBtnText = this.birthBtnText ? '完成日期选择' : '选择生日日期';
  }

  get birthText() {
    //用户还没设置生日时，返回服务器响应的最初数据
    if(this.birthUntouched === true) {
      return this._birthText;
    }
    this._birthText = DateFormat.formatWithDay(this.birth);
    return this._birthText;
  }

  set birthText(text) {
    this._birthText = text;
  }

  submitData(teacher: Teacher){
    //检查数据的完备性
    if(teacher.teacherName == null || teacher.teacherName.length == 0) {
      alert("教师姓名不能为空");
      return;
    }
    if(teacher.passwd == null || teacher.passwd.length == 0) {
      alert("密码不能为空");
      return;
    }
    if(teacher.phone == null || teacher.phone.length == 0) {
      alert("手机号码不能为空");
      return;
    }
    if(teacher.job == null || teacher.job.length == 0) {
      alert("通知的标题不能为空");
      return;
    }
    if(teacher.gender == null || teacher.gender.length == 0) {
      alert("性别不能为空");
      return;
    }
    if(teacher.office == null || teacher.office.length == 0) {
      alert("办公室不能为空");
      return;
    }
    if(teacher.major == null || teacher.major.length == 0) {
      alert("专业不能为空");
      return;
    }
    //若用户选择了生日，则更新教师生日
    if(this.birthText != '未选择生日') {
      teacher.birth = this.birthText;
    }
    //提交数据
    this.personInfoService.updateTeacherInfo(teacher).subscribe(
      data => {
        if(data['code'] === 100) {
          alert("提交成功");
        }
        else{
          //提示服务器返回的错误信息
          let errorFields = data['extend']['errorFields'];
          let fields: string[] = ['teacherName', 'passwd', 'phone', 'job', 'gender', 'email', 'office', 'major'];
          fields.map(key => {
            if(errorFields[key]) {
              alert("服务器校验信息: " + errorFields[key]);
            }
          })
        }
      }
    )
  }

}
