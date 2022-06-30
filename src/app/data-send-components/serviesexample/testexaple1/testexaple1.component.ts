import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-testexaple1',
  template: `<p>testexaple1 works!</p>
  <div *ngFor="let info of userInfo">
      {{info.id}}|{{info.name}}|{{info.age}}|{{info.gender}}|{{info.email}}|{{info.phoneNo}}
  </div>this data coming from `
})
export class Testexaple1Component implements OnInit {

  userInfo;
  constructor(private testService: TestService) { }

  ngOnInit(){
    this.userInfo = this.testService.getData();
  } 
}
