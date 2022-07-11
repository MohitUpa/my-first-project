import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-test-form3',
  templateUrl: './test-form3.component.html',
  styleUrls: ['./test-form3.component.css']
})
export class TestForm3Component implements OnInit {

  dropdownList = [];
  dropdownSettings: IDropdownSettings = {};
  userInfo = [];
  stepdata = true;
  editData;
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
  oldP1;
  oldP2;
  oldP3;
  onEdit = false;
  editOn;

  constructor(private modalService: NgbModal, private route: ActivatedRoute, private router: Router, private userdatainfo: UserDataService) { }

  ngOnInit() {
    this.dropdownList = [
      "Graduation", "post Graduation"
    ];
    this.dropdownSettings = {};
    this.userInfo = this.userdatainfo.userDataInfo;    
  }

  // Edit form Code
  edit(data) {
    this.oldId = data.id;
    this.oldName = data.data.firstPage.name;
    this.oldEmail = data.data.firstPage.email;
    this.oldGender = data.data.firstPage.gender;
    this.oldDob = data.data.firstPage.dob;
    this.oldHobbies = data.data.secondPage.hobbies; 
    this.oldP1 = data.data.secondPage.phone_no.p1;
    this.oldP2 = data.data.secondPage.phone_no.p2;
    this.oldP3 = data.data.secondPage.phone_no.p3;
    this.oldQualification = data.data.thirdPage.qualification;
    this.oldProfession = data.data.thirdPage.profession;
    this.oldDesc = data.data.thirdPage.desc;
    this.oldContect = data.data.thirdPage.contactPerson;
    this.onEdit = true;
  }
  saveData(data) {
    this.objIndex = this.userdatainfo.userDataInfo.findIndex((obj => obj.id == data.value.id));
    this.userdatainfo.userDataInfo[this.objIndex].data.firstPage.name = data.value.name;
    this.userdatainfo.userDataInfo[this.objIndex].data.firstPage.email = data.value.email;
    this.userdatainfo.userDataInfo[this.objIndex].data.firstPage.gender = data.value.gender;
    this.userdatainfo.userDataInfo[this.objIndex].data.firstPage.dob = data.value.dob;
    this.userdatainfo.userDataInfo[this.objIndex].data.secondPage.hobbies = data.value.hobbies;
    this.userdatainfo.userDataInfo[this.objIndex].data.secondPage.phone_no = data.value.phone_no;
    this.userdatainfo.userDataInfo[this.objIndex].data.thirdPage.qualification = data.value.qualification;
    this.userdatainfo.userDataInfo[this.objIndex].data.thirdPage.profession = data.value.profession;
    this.userdatainfo.userDataInfo[this.objIndex].data.thirdPage.desc = data.value.desc;
    this.onEdit = false;
  }

  //to reactive edit form
  editReactive(reactiveEditData) { 
      this.router.navigate(['reactive-edit',reactiveEditData.id]);
  }

  deleteData(data) {
    this.userdatainfo.userDataInfo.splice(this.userdatainfo.userDataInfo.indexOf(data), 1);
  }
}


