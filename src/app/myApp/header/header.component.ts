import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-myApp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderMyAppComponent implements OnInit {

  @Output() featureSelector = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature:string) {
    this.featureSelector.emit(feature);
  }
}
