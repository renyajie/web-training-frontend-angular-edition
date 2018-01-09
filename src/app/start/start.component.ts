import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  message: string = '';

  constructor(public router: Router) { }

  ngOnInit() {
    
  }

  login() {
    this.router.navigate(['main']);
  }
}
