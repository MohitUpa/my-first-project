import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-form-assignment',
  templateUrl: './form-assignment.component.html',
  styleUrls: ['./form-assignment.component.css']
})
export class FormAssignmentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  toForm() {
      this.router.navigate(['form']);
  }
}
