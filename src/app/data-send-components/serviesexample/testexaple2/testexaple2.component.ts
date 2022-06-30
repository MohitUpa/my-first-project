import { Component, OnInit } from '@angular/core';
import { Test1Service } from '../test1.service';

@Component({
  selector: 'app-testexaple2',
  template:`<p>testexaple1 works!</p>
  <div *ngFor="let userInfo of information">
      <div *ngFor="let info of userInfo.info">
          {{info.id}}|{{info.name}}
      </div>
      {{userInfo.msg}}
  </div>`
  ,
  providers: [Test1Service]
})
export class Testexaple2Component implements OnInit {

  information;
  constructor(private test1Service: Test1Service) { }

  ngOnInit(): void {
    // console.log(this.test1Service.getUserInfo());
    this.information = this.test1Service.getUserInfo();
  }

}
