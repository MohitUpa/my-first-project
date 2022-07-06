import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-test-form3',
  templateUrl: './test-form3.component.html',
  styleUrls: ['./test-form3.component.css']
})
export class TestForm3Component implements OnInit {
  @ViewChild('firstPage') test;

  gender: string;
  hobbies = [
    { label: 'Singing', selected: false },
    { label: 'Dancing', selected: false },
    { label: 'Playing', selected: false },
    { label: 'Fighting', selected: false }
  ];

  dropdownList = [];
  dropdownSettings: IDropdownSettings = {};
  userInfo = [];
  stepdata = true;
  editData;


  constructor(private modalService: NgbModal, private route: ActivatedRoute, private router: Router, private userdatainfo: UserDataService) { }

  ngOnInit() {
    this.dropdownList = [
      "Graduation", "post Graduation"
    ];
    this.dropdownSettings = {};
    this.userInfo = this.userdatainfo.userDataInfo;
  }
  idval = 1

  objectKeys = Object.keys;
  onSubmit(formData: NgForm) {
    console.log(formData.value);
    this.userdatainfo.userDataInfo.push({ id: this.idval++, form: 'tamplate', data: formData.value });
    alert('thankyou for registring');
    this.userInfo = this.userdatainfo.userDataInfo;
    this.stepdata = false;
  }


  //fancybox code 
  closeResult = '';
  open(content) {
    this.stepdata = true;
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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

  // Edit form Code

  oldName: string;
  oldEmail: string;
  oldGender: string;
  oldDob: String;
  oldProf_img: string;
  oldPhone_no: string;
  oldDesc: string;
  oldProfession;
  oldQualification;
  oldId;
  objIndex;
  oldPersonName;
  oldPhoneNo;
  oldContect;
  oldHobbies;
  onEdit = false;
  edit(data) {
    this.oldId = data.id;
    this.oldName = data.data.name;
    this.oldEmail = data.data.email;
    this.oldGender = data.data.gender;
    this.oldDob = data.data.dob;
    this.oldHobbies = data.data.hobbies;    
    this.oldPhone_no = data.data.phone_no;
    this.oldQualification = data.data.qualification;
    this.oldProfession = data.data.profession;
    this.oldDesc = data.data.desc;
    this.oldContect = data.data.contactPerson;
    this.onEdit = true;
  }
  saveData(data) {
    this.objIndex = this.userdatainfo.userDataInfo.findIndex((obj => obj.id == data.value.id));
    this.userdatainfo.userDataInfo[this.objIndex].data.name = data.value.name;
    this.userdatainfo.userDataInfo[this.objIndex].data.email = data.value.email;
    this.userdatainfo.userDataInfo[this.objIndex].data.gender = data.value.gender;
    this.userdatainfo.userDataInfo[this.objIndex].data.dob = data.value.dob;
    this.userdatainfo.userDataInfo[this.objIndex].data.hobbies = data.value.hobbies;
    this.userdatainfo.userDataInfo[this.objIndex].data.phone_no = data.value.phone_no;
    this.userdatainfo.userDataInfo[this.objIndex].data.qualification = data.value.qualification;
    this.userdatainfo.userDataInfo[this.objIndex].data.profession = data.value.profession;
    this.userdatainfo.userDataInfo[this.objIndex].data.desc = data.value.desc;
    this.onEdit = false;
  }



  // contact person code
  public contectPerson: any[] = [{
    id: 1,
    personName: '',
    personNumber: ''
  },];

  addPerson() {
    this.contectPerson.push({
      id: this.contectPerson.length + 1,
      personName: '',
      personNumber: ''
    });
    this.oldContect.push({
      id: this.contectPerson.length + 1,
      personName: '',
      personNumber: ''
    });
  }

  removePerson(i: number) {
    this.contectPerson.splice(i, 1);
    this.oldContect.splice(i, 1);
  }

  deleteData(data) {
    this.userdatainfo.userDataInfo.splice(this.userdatainfo.userDataInfo.indexOf(data), 1);
  }
}


