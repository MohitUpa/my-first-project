import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TestViewChildPartComponent } from './test-view-child-part/test-view-child-part.component';

@Component({
  selector: 'app-test-view-child',
  templateUrl: './test-view-child.component.html',
  styleUrls: ['./test-view-child.component.css']
})
export class TestViewChildComponent implements OnInit, AfterViewInit {

  @ViewChild('child') private child: TestViewChildPartComponent;
  message: string = '';
  
  ngAfterViewInit() {
    this.message = this.child.getMessage();
  }

  constructor() { }

  ngOnInit(): void {
  }

}


