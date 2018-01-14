import { Component, OnInit } from '@angular/core';

import { PersonInfoService } from '../core/person-info.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isStudent: boolean;

  constructor(private personInfoService: PersonInfoService) { 
    this.isStudent = this.personInfoService.isStudent;
  }

  ngOnInit() {
  }

}
