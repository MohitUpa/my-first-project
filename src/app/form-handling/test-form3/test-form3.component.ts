import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { RegisService } from 'src/app/form-assignment/regis.service';
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
  editData : any;
  oldId  : any;
  objIndex  : any;
  onEdit = false;
  isFatching = false;

  constructor(private modalService: NgbModal, private route: ActivatedRoute, private router: Router, private userdatainfo: UserDataService, private regis: RegisService) { }

  ngOnInit() {
    this.dropdownList = [
      "Graduation", "post Graduation"
    ];
    this.dropdownSettings = {};
    this.userInfo = this.userdatainfo.userDataInfo;
    this.isFatching = true;
    this.regis.fatchData().subscribe(
      post => {
        this.isFatching = false;
      },
      error => {
        this.isFatching = false;
        console.log(error.message);
      });
      
      
  }

  oldValue;
  contactP = []
  // Edit form Code
  edit(data) {
    
    this.objIndex = this.userdatainfo.userDataInfo.findIndex((obj => obj.id ==  data));
    this.oldValue = this.userdatainfo.userDataInfo[this.objIndex].data;
    this.contactP = this.userdatainfo.userDataInfo[this.objIndex].data.thirdPage.contactPerson;
    this.contectPerson = []
    for (const contactData of this.contactP) {
      this.contectPerson.push({
        personName: contactData['personName'],
        personNumber: {
          cp1: contactData.personNumber.cp1, cp2:  contactData.personNumber.cp2 , cp3: contactData.personNumber.cp3
        }
      });
    }
    this.oldId = data;
    this.onEdit = true;
  }
  saveData(data) {
    this.regis.updateData({form:'tamplate',data: data.value},data.value.firstPage.id)
    alert('Information Updated');
    this.onEdit = false;
  }

  //to reactive edit form
  editReactive(reactiveEditData) {
    this.router.navigate(['reactive-edit', reactiveEditData.id]);
  }

  onFatchData() {
    this.userdatainfo.userDataInfo = [];
    this.isFatching = true;
    this.regis.fatchData().subscribe(
      post => {
        this.isFatching = false;
        this.userInfo = post.userDataInfo;
      },
      error => {
        this.isFatching = false;
        console.log(error.message);
      });;
  }

  deleteData(data) {
    this.userdatainfo.userDataInfo.splice(this.userdatainfo.userDataInfo.indexOf(data), 1);
    this.regis.deleteData(data).subscribe(() => {
      console.log("deleted");
    });
  }


    // contact person code
    public contectPerson: any[] = [];
  
    addPerson() {
      this.contectPerson.push({
        id: this.contectPerson.length + 1,
        personName: '',
        personNumber: {
          cp1: '', cp2: '' , cp3: ''
        }
      });
    }
  
    removePerson(i: number) {
      this.contectPerson.splice(i, 1);
    }
  
}


