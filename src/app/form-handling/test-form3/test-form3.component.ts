import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-test-form3',
  templateUrl: './test-form3.component.html',
  styleUrls: ['./test-form3.component.css']
})
export class TestForm3Component implements OnInit {

  @ViewChild('tamplateForm') formData:NgForm;

  name: string;
  email: string;
  gender: string;
  dob: string;
  prof_img: string;
  hobbies = [
    { label: 'Singing', selected: false },
    { label: 'Dancing', selected: false },
    { label: 'Playing', selected: false },
    { label: 'Fighting', selected: false }
  ];

  phone_no: string;
  profession: string;
  desc: string;

  dropdownList = [];
  dropdownSettings:IDropdownSettings={};
 
  constructor() { }

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Item1' },
      { item_id: 2, item_text: 'Item2' },
      { item_id: 3, item_text: 'Item3' },
      { item_id: 4, item_text: 'Item4' },
      { item_id: 5, item_text: 'Item5' }
    ];
    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
    };
  }

 

  reactiveForm = false;
  tamplateForm = true;

  onReactive() {
    this.reactiveForm = true;
    this.tamplateForm = false;
  }

  ontamplate() {
    this.reactiveForm = false;
    this.tamplateForm = true;
  }

  step1 = true;
  step2 = true;
  step3 = true;
  // step1 = true;
  // step2 = false;
  // step3 = false;


  show1() {
    this.step1 = true;
    this.step2 = false;
    this.step3 = false;
  }

  show2() {
    this.step1 = false;
    this.step2 = true;
    this.step3 = false;
  }

  show3() {
    this.step1 = false;
    this.step2 = false;
    this.step3 = true;
  }

  onSubmit() {
    console.log(this.formData);
  }

}
