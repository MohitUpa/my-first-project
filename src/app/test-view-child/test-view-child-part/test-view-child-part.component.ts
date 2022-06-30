import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-view-child-part',
  templateUrl: './test-view-child-part.component.html',
  styleUrls: ['./test-view-child-part.component.css']
})
export class TestViewChildPartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getMessage() {
    console.log("child message");
    return "Child component message"
  }
 

}
