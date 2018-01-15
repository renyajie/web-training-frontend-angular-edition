import { Component, OnInit } from '@angular/core';

import { CourseService } from '../../../core/course.service';

@Component({
  selector: 'app-course-add-student',
  templateUrl: './course-add-student.component.html',
  styleUrls: ['./course-add-student.component.css']
})
export class CourseAddStudentComponent implements OnInit {

  arrangementId = '';
  studentIds = '';

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

  submitData(){
    //检查数据的完备性
    if(this.arrangementId == null || this.arrangementId.length == 0) {
      alert("课程编号不能为空");
      return;
    }
    if(this.studentIds == null || this.studentIds.length == 0) {
      alert("学生学号不能为不能为空");
      return;
    }
    //提交数据
    this.courseService.courseAddCourse(this.arrangementId, this.studentIds).subscribe(
      data => {
        if(data['code'] === 100) {
          alert("课程信息录入成功");
        }
        else{
          //提示服务器返回的错误信息
          alert("服务器发生错误");
        }
      }
    )
  }

}
