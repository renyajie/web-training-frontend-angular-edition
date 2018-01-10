import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Teacher } from '../po/teacher';
import { Student } from '../po/student';
import { PersonInfoService } from './person-info.service';

@Injectable()
export class LoginService {

  url = 'api/auth/';

  constructor(
    private httpClient: HttpClient,
    private personInfoService: PersonInfoService) { }

  /**
   * 教师登录
   * @param teacher 教师
   */
  teacherLogin(teacher: Teacher) {
    const testUrl = this.url + 'teacherLogIn';
    return this.httpClient.post(testUrl, teacher);
  }

  /**
   * 学生登录
   * @param student 学生
   */
  studentLogin(student: Student) {
    const testUrl = this.url + 'studentLogIn';
    return this.httpClient.post(testUrl, student);
  }

}