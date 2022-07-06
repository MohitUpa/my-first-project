import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { UserDataService } from 'src/app/user-data.service';


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

  userInfo;
  stepdata1 = true;


  dropdownList = [];
  dropdownSettings: IDropdownSettings = {};

  ngOnInit() {
    this.stepdata1 = true;
    this.dropdownList = [
      "Graduation", "post Graduation"
    ];
    this.dropdownSettings = {};

    this.myForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl(null, Validators.required),
      dob: new FormControl(null, Validators.required),
      prof_img: new FormControl(null, Validators.required),
      hobbies: new FormGroup({
        Singing: new FormControl(),
        Dancing: new FormControl(),
        Playing: new FormControl(),
        Fighting: new FormControl(),
      }),
      phone_no: new FormControl(null, [Validators.required, Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')]),
      profession: new FormControl(null, Validators.required),
      desc: new FormControl(null, Validators.required),
      qualification: new FormControl(null, Validators.required),
      contactPerson: new FormGroup({
        person_name: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
        person_no: new FormControl(null, [Validators.required, Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')]),
      })
    });

    this.userInfo = this.userDataingo.userDataInfo;
  }
  idval = 1000;
  myForm: FormGroup;

  onSubmitR(form: FormGroup) {
    this.userInfo = this.userDataingo.userDataInfo.push({ id: this.idval++, form: 'reactive', data: form.value });
    alert('thankyou for registring');
    this.myForm.reset();
    this.stepdata1 = false;
  }

  closeResult = '';

  constructor(private modalService: NgbModal, private fb: FormBuilder, private userDataingo: UserDataService) {
    this.myForm = this.fb.group({
      checkArray: this.fb.array([], [Validators.required]),
    });
  }

  open(content) {
    this.stepdata1 = true;

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

  public contectPerson: any[] = [{
    id: 1,
    personName: '',
    personNumber: ''
  }];

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

}
