import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class Child1Component implements OnInit {
  getMessage() {
    // console.log("child message");
    return "Child component message"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
