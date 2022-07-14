import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-form-assignment',
  templateUrl: './form-assignment.component.html',
  styleUrls: ['./form-assignment.component.css']
})
export class FormAssignmentComponent implements OnInit {

  constructor(private router:Router,private dataService: UserDataService) { }

  ngOnInit(): void {
  }

  toForm() {
    this.dataService.userDataInfo = [];
      this.router.navigate(['form']);
  }
}
