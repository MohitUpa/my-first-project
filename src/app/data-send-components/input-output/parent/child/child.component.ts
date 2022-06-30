import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h4><b>Child Component</b></h4>
    <button (click)="send()"><b>Click</b></button>
    <h5>My name is <b>{{name}}</b></h5>
    `
})
export class ChildComponent implements OnInit, OnDestroy {
  ngOnInit(): void {}
  ngOnDestroy(): void {}

  @Input() name: string;

  @Output() username = new EventEmitter<string>();

  send() {
    this.username.emit('Moh');
  }

}
