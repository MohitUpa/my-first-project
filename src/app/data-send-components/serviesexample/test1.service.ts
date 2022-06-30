import { Injectable } from '@angular/core';
import { TestService } from './test.service';

@Injectable()

export class Test1Service {
  constructor(private testService:TestService) { }
  
  message:string = "This data coming from test1 service file";

  getUserInfo() {
    return [{info: this.testService.getData(),msg:this.message}];
  }
}
