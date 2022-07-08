import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-tamplate-driven-assign-from',
  templateUrl: './tamplate-driven-from.component.html',
  styleUrls: ['./tamplate-driven-from.component.css']
})
export class TamplateDrivenFromComponent implements OnInit {

  @ViewChild('tamplateForm') formdata1: NgForm;

  gender: string;

  addedHobby;
  //hobby

  hobbies = [
    { label: 'Singing', selected: false },
    { label: 'Dancing', selected: false },
    { label: 'Playing', selected: false },
    { label: 'Fighting', selected: false }
  ];

  addedhob = ['test'];
  hobbyInput = false;
  onHobby() {
    this.hobbyInput = true;
  }
  onAddHobby(hobby) {
    this.hobbies.push({ label: hobby.value, selected: false })
    this.addedhob.push(hobby.value);
    this.hobbyInput = false;
  }
  onCancelHobby() {
    this.hobbyInput = false;
  }

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
    console.log(this.userdatainfo.userDataInfo);

  }
  idval = 1;

  onSubmit(formData: NgForm) {
    console.log("tamplate form data");
    console.log(formData.value);
    for (var hobby in formData.value.secondPage.hobbies) {
      for (let hob of this.addedhob) {
        if (hobby == hob) {
          if (formData.value.secondPage.hobbies[hobby] == false) {
            delete formData.value.secondPage.hobbies[hobby]
          }
        }
      }
    }

    if (formData.valid) {
      this.userdatainfo.userDataInfo.push({ id: this.idval++, form: 'tamplate', data: formData.value });
      alert('thankyou for registring');
      this.userInfo = this.userdatainfo.userDataInfo;
      console.log(this.userdatainfo.userDataInfo);
      this.stepdata = false;

      for (let hob of this.addedhob) {
        for (var hobby in this.hobbies) {
          const test = this.hobbies[hobby];
          if (test.label == hob) {
            this.hobbies.splice(+hobby, 1);
            console.log(this.hobbies);
          }
        }
      }
      formData.reset();     

    }

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

  onEdit = false;

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
  }

  removePerson(i: number) {
    this.contectPerson.splice(i, 1);
  }

  deleteData(data) {
    this.userdatainfo.userDataInfo.splice(this.userdatainfo.userDataInfo.indexOf(data), 1);
  }
}
