import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Child1Component } from './child/child.component';

@Component({
  selector: 'app-view-child',
  template:`<p>parent-component!</p>
  {{message}}
  <app-child1 #child></app-child1>`
})
export class ViewChildComponent implements AfterViewInit {
  @ViewChild('child') private child: Child1Component;
  message: string = '';
  newName: string;
  dataservice: any;
  constructor() { }
  
  ngAfterViewInit() {
    this.message = this.child.getMessage();
  }
}
