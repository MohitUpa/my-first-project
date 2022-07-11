import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { UserDataService } from 'src/app/user-data.service';


@Component({
  selector: 'app-reactive-assign-from',
  templateUrl: './reactive-from.component.html',
  styleUrls: ['./reactive-from.component.css']
})
export class ReactiveFromComponent implements OnInit {

  myForm: FormGroup;
  gender: string;
  addedhob = [];
  hobbyInput = false;  
  userInfo;
  stepdata1 = true;
  dropdownList = [];
  dropdownSettings: IDropdownSettings = {};

  // hobby
  hobbies = [
    { label: 'Singing', selected: false },
    { label: 'Dancing', selected: false },
    { label: 'Playing', selected: false },
    { label: 'Fighting', selected: false },
  ];

  constructor(private modalService: NgbModal, private fb: FormBuilder, private userDataingo: UserDataService) {
    this.myForm = this.fb.group({
      checkArray: this.fb.array([], [Validators.required]),
    });
  }

  hobbieControls = {
    Singing: new FormControl(),
    Dancing: new FormControl(),
    Playing: new FormControl(),
    Fighting: new FormControl(),
  }

  onHobby() {
    this.hobbyInput = true;
  }
  onAddHobby(hobby) {
    this.hobbies.push({ label: hobby.value, selected: false },)
    this.hobbieControls[hobby.value] = new FormControl();
    this.addedhob.push(hobby.value);
    this.hobbyInput = false;
  }
  onCancelHobby() {
    this.hobbyInput = false;
  }

  ngOnInit() {
    this.dropdownList = [
      "Graduation", "post Graduation"
    ];
    this.dropdownSettings = {};

    this.myForm = new FormGroup({
      firstPage: new FormGroup({
        name: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        gender: new FormControl(null, Validators.required),
        dob: new FormControl(null, Validators.required),
      }),
      secondPage: new FormGroup({
        prof_img: new FormControl(null, Validators.required),
        hobbies: new FormGroup(this.hobbieControls),
        phone_no: new FormGroup({
          p1: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{3}$'), Validators.maxLength(3)]),
          p2: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{3}$'), Validators.maxLength(3)]),
          p3: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{4}$'), Validators.maxLength(4)]),
        })
      }),
      thirdPage: new FormGroup({
        profession: new FormControl(null, Validators.required),
        desc: new FormControl(null, Validators.required),
        qualification: new FormControl(null, Validators.required),
        contactPerson: new FormGroup({
          personName: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
          phoneNo: new FormGroup({
            cp1: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{3}$')]),
            cp2: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{3}$')]),
            cp3: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{4}$')]),
          })
        })
      })
    });

    this.userInfo = this.userDataingo.userDataInfo;
  }
  idval = 1000;

  onSubmitR() {
    console.log("reactive form data");

    console.log(this.hobbieControls);

    console.log(this.myForm.value);

    for (var hobby in this.myForm.value.secondPage.hobbies) {
      for (let hob of this.addedhob) {
        if (hobby == hob) {
          if (this.myForm.value.secondPage.hobbies[hobby] == null) {
            delete this.myForm.value.secondPage.hobbies[hobby]
          }
        }
      }
    }

    if (this.myForm.valid) {
      this.userInfo = this.userDataingo.userDataInfo.push({ id: this.idval++, form: 'reactive', data: this.myForm.value });
      alert('thankyou for registring');
      for (let hob of this.addedhob) {
        for (var hobby in this.hobbies) {
          const test = this.hobbies[hobby];
          if (test.label == hob) {
            this.hobbies.splice(+hobby, 1);
            console.log(this.hobbies);
          }
        }
      } 
      this.myForm.reset();     
    }
    this.stepdata1 = false;
  }



  closeResult = '';

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
