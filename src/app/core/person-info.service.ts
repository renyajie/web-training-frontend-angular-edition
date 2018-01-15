import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Student } from '../po/student';
import { Teacher } from '../po/teacher';

@Injectable()
export class PersonInfoService {

  url = 'api/auth/';

  //记录进入系统的用户信息
  private _isStudent: boolean;
  private _account: number;
  private _student: Student;
  private _teacher: Teacher;

  constructor(private httpClient: HttpClient) { 
    //TODO: 测试信息，测试教师编号为1的用户
    this.account = 1;
    this.isStudent = true;
  }

  set account(account: number) {
    this._account = account;
  }

  get account() {
    return this._account;
  }

  set isStudent(isStudent: boolean) {
    this._isStudent = isStudent;
  }

  get isStudent(){
    return this._isStudent;
  }

  set student(student: Student) {
    this._student = student;
  }

  get student(){
    return this._student;
  }

  set teacher(teacher: Teacher){
    this._teacher = teacher;
  }

  get teacher() {
    return this._teacher;
  }

  /**
   * 获取登录者的信息
   */
  getPersonInfo() {
    //根据用户登录信息获取用户身份参数
    //根据请求者的身份构造不同的url和请求参数
    let testUrl = '';
    let personIdName = '';
    if (this.isStudent) {
      personIdName = 'studentId';
      testUrl = this.url + 'getStudentInfo';
    } else {
      personIdName = 'teacherId';
      testUrl = this.url + 'getTeacherInfo';
    }
    const params = new HttpParams()
    .set(personIdName, this.account + '');
    return this.httpClient.get(testUrl, {params});
    //TODO 和登录整合
    /*.subscribe(
      data => {
        //若服务器成功返回信息
        if(data['code'] === 100) {
          this.student = Student.fromJSON(data['info']);
        }
      }
    )*/
  }

  /**
   * 更新教师信息
   * @param teacher 教师信息
   */
  updateTeacherInfo(teacher: Teacher) {
    const testUrl = this.url + 'teacherUpdate';
    return this.httpClient.put(testUrl, teacher);
  }

  /**
   * 更新学生信息
   * @param student 学生信息 
   */
  updateStudentInfo(student: Student) {
    const testUrl = this.url + 'studentUpdate';
    return this.httpClient.put(testUrl, student);
  }
}
