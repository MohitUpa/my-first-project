import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-test-form3',
  templateUrl: './test-form3.component.html',
  styleUrls: ['./test-form3.component.css']
})
export class TestForm3Component implements OnInit {

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
  }


  onSubmit(formData:NgForm) {
    console.log(formData.value);
    alert('thankyou for registring')
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

  focusOutFunction(e) {
    // alert('Are Sure you want to the Form?')
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
