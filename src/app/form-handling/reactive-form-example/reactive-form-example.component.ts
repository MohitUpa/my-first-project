import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.css']
})
export class ReactiveFormExampleComponent implements OnInit {

  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'name': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'password': new FormControl(null, Validators.required),
      'hobbies': new FormArray([])
    });
  }

  onAddHobby() {
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  

  onSubmit() {
    console.log(this.signupForm);
  }

}
