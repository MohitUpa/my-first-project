import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { Test1Service } from './test1.service';

@Component({
  selector: 'app-serviesexample',
  templateUrl: './serviesexample.component.html',
  styleUrls: ['./serviesexample.component.css'],
  providers: [TestService]
})
export class ServiesexampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
