import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }




  // show(event: any) {
  //   // console.log(event.target.value);
  //   this.name = event.target.value;
  // }

  qtys: number;
  Amount: number;

  quantity(newItem: any) {
    this.qtys = newItem;
    this.amount();
  }

  showAmount() {
    if (this.Amount >= 0) {
      return this.Amount;
    }
    return 0;
  }
  
  
  increase() {
    this.qtys = +this.qtys + 1;
    this.amount();
  }
  
  decrease() {
    this.qtys = this.qtys - 1;
    this.amount();
  }
  amount() {
    this.Amount = this.qtys * 20;
    this.showAmount();
  }

}
