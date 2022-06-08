import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  defaultName = "Mohit Upadhyay";
  fontsize: number = 30;
  name = '';
  show(event: any) {
    // console.log(event.target.value);
    this.name = event.target.value;
  }
  increase() {
    this.fontsize = (this.fontsize + 1);
  }
  decrease() {
    this.fontsize = (this.fontsize - 1);
  }

}
