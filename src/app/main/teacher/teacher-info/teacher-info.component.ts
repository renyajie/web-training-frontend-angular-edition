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

  //在服务器返回结果之前不显示信息
  showData = false;
  teacher: Teacher;
  private _birthText = '';
  //判断用户是否尚未选择生日
  birthUntouched = true;
  //日期选择框文本
  birthBtnText = '';
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
    this.personInfoService.getPersonInfo().subscribe(
      data => {
        //若服务器成功返回信息
        if(data['code'] === 100) {
          this.teacher = Teacher.fromJSON(data['info']);
          //若未选择生日
          if(this.teacher.birth == null || this.teacher.birth.length == 0) {
            this.birthText = '未选择生日';
          }else {
            this.birthText = this.teacher.birth;
          }
          this.showData = true;
        }
        //若发生错误
        else {
          alert("服务器发生错误");
        }
      }
    )
  }

  get diagnostic() { return JSON.stringify(this.teacher); }

  showBirthPicker(event: any) {
    if(this.birthUntouched === true) {
      this.birthUntouched = false;
    }
    this.showBirth = !this.showBirth;
    this.birthBtnText = this.birthBtnText ? '完成日期选择' : '选择生日日期';
  }

  get birthText() {
    if(this.birthUntouched === true) {
      return this._birthText;
    }
    this._birthText = DateFormat.formatWithDay(this.birth);
    return this._birthText;
  }

  set birthText(text) {
    this._birthText = text;
  }

  submitData(){
    //检查数据的完备性
    if(this.teacher.teacherName == null || this.teacher.teacherName.length == 0) {
      alert("教师姓名不能为空");
      return;
    }
    if(this.teacher.passwd == null || this.teacher.passwd.length == 0) {
      alert("密码不能为空");
      return;
    }
    if(this.teacher.phone == null || this.teacher.phone.length == 0) {
      alert("手机号码不能为空");
      return;
    }
    if(this.teacher.job == null || this.teacher.job.length == 0) {
      alert("通知的标题不能为空");
      return;
    }
    if(this.teacher.gender == null || this.teacher.gender.length == 0) {
      alert("性别不能为空");
      return;
    }
    if(this.teacher.office == null || this.teacher.office.length == 0) {
      alert("办公室不能为空");
      return;
    }
    if(this.teacher.major == null || this.teacher.major.length == 0) {
      alert("专业不能为空");
      return;
    }
    //若用户选择了生日，则更新教师生日
    if(this.birthText != '未选择生日') {
      this.teacher.birth = this.birthText;
    }
    //提交数据
    this.personInfoService.updateTeacherInfo(this.teacher).subscribe(
      data => {
        if(data['code'] === 100) {
          alert("提交成功");
        }
        else{
          //提示服务器返回的错误信息
          //TODO fix here
          alert("服务器检验信息错误");
        }
      }
    )
  }

}
