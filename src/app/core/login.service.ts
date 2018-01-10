import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

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

  /**
   * 处理Http错误
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: 向后台发送错误信息
      console.error(error); 
      // TODO: 打印错误信息
      console.log(`${operation} failed: ${error.message}`);
      // 返回空值让app继续运行
      return of(result as T);
    };
  }

}
