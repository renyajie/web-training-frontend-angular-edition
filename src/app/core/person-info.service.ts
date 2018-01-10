import { Injectable } from '@angular/core';
import { Student } from '../po/student';
import { Teacher } from '../po/teacher';

@Injectable()
export class PersonInfoService {

  private _isStudent: boolean;
  private _account: number;
  private _student: Student;
  private _teacher: Teacher;

  constructor() { }

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
}
