import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-reactive-assign-from',
  templateUrl: './reactive-from.component.html',
  styleUrls: ['./reactive-from.component.css']
})
export class ReactiveFromComponent implements OnInit {

  gender: string;
  hobbies = [
    { label: 'Singing', selected: false },
    { label: 'Dancing', selected: false },
    { label: 'Playing', selected: false },
    { label: 'Fighting', selected: false }
  ];


  dropdownList = [];
  dropdownSettings:IDropdownSettings={};
 
  ngOnInit() {
    this.dropdownList = [
      "Graduation","post Graduation"
    ];
    this.dropdownSettings = {};

    this.myForm = new FormGroup({
      name: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required,Validators.email]),
      gender: new FormControl(null,Validators.required),
      dob: new FormControl(null,Validators.required),
      prof_img: new FormControl(null,Validators.required),
      hobbies: new FormArray([]),
      phone_no: new FormControl(null,Validators.required),
      profession: new FormControl(null,Validators.required),
      desc: new FormControl(null,Validators.required),
      // qualification: new FormArray([]),
      contactPerson: new FormGroup({
        person_name:new FormControl(null,Validators.required),
        person_no:new FormControl(null,Validators.required),
      })
    });
  }

  myForm: FormGroup;

  onSubmitR(form: FormGroup) {
    console.log(form.value);
    console.log(form);
  }

  closeResult = '';
  
  constructor(private modalService: NgbModal) {}
  
  open(content) {
    this.modalService.open(content,
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = 
         `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public contectPerson: any[] = [{
    id: 1,
    personName:'',
    personNumber:''
  }];

  addPerson() {
    this.contectPerson.push({
      id: this.contectPerson.length + 1,
      personName:'',
      personNumber:''
    });
  }

  removePerson(i: number) {
    this.contectPerson.splice(i, 1);
  }

}
