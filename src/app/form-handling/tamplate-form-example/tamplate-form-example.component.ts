import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tamplate-form-example',
  templateUrl: './tamplate-form-example.component.html',
  styleUrls: ['./tamplate-form-example.component.css']
})
export class TamplateFormExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit(formData:NgForm) {
      console.log(formData);
  }
}
