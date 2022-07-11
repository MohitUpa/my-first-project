import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Subscription } from 'rxjs';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-edit-reactive-form-assign',
  templateUrl: './edit-reactive-form-assign.component.html',
  styleUrls: ['./edit-reactive-form-assign.component.css']
})
export class EditReactiveFormAssignComponent implements OnInit,OnDestroy {
  myForm: FormGroup;
  gender: string;
  stepdata1 = true;
  dropdownList = [];
  dropdownSettings: IDropdownSettings = {};
  editDataId;
  objIndex;
  serviceData;
  addedhob = [];
  hobbyInput = false;
  sub : Subscription;

  // hobby
  hobbies = [
    { label: 'Singing', selected: false },
    { label: 'Dancing', selected: false },
    { label: 'Playing', selected: false },
    { label: 'Fighting', selected: false },
  ];

  constructor(private modalService: NgbModal, private fb: FormBuilder, private userDataingo: UserDataService, private route: ActivatedRoute, private router: Router) {
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

   this.sub = this.route.params.subscribe(params => this.editDataId = params['id']);

    this.objIndex = this.userDataingo.userDataInfo.findIndex((obj => obj.id == this.editDataId));
    this.serviceData = this.userDataingo.userDataInfo[this.objIndex].data
    console.log(this.serviceData);

    this.stepdata1 = true;
    this.dropdownList = [
      "Graduation", "post Graduation"
    ];
    this.dropdownSettings = {};

    this.myForm = new FormGroup({
      firstPage: new FormGroup({
        name: new FormControl(this.serviceData.firstPage.name, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
        email: new FormControl(this.serviceData.firstPage.email, [Validators.required, Validators.email]),
        gender: new FormControl(this.serviceData.firstPage.gender, Validators.required),
        dob: new FormControl(this.serviceData.firstPage.dob, Validators.required),
      }),
      secondPage: new FormGroup({
        hobbies: new FormGroup(this.hobbieControls),
        phone_no: new FormGroup({
          p1: new FormControl(this.serviceData.secondPage.phone_no.p1, [Validators.required, Validators.pattern('^[0-9]{3}$'), Validators.maxLength(3)]),
          p2: new FormControl(this.serviceData.secondPage.phone_no.p2, [Validators.required, Validators.pattern('^[0-9]{3}$'), Validators.maxLength(3)]),
          p3: new FormControl(this.serviceData.secondPage.phone_no.p3, [Validators.required, Validators.pattern('^[0-9]{4}$'), Validators.maxLength(4)]),
        })
      }),
      thirdPage: new FormGroup({
        profession: new FormControl(this.serviceData.thirdPage.profession, Validators.required),
        desc: new FormControl(this.serviceData.thirdPage.desc, Validators.required),
        qualification: new FormControl(this.serviceData.thirdPage.qualification, Validators.required),
      })
    });

  }

  onSubmitR() {
    console.log("reactive form data");
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
      this.route.params.subscribe(params => this.editDataId = params['id']);
      this.objIndex = this.userDataingo.userDataInfo.findIndex((obj => obj.id == this.editDataId));
      this.userDataingo.userDataInfo[this.objIndex].data.firstPage.name = this.myForm.value.firstPage.name;
      this.userDataingo.userDataInfo[this.objIndex].data.firstPage.email = this.myForm.value.firstPage.email;
      this.userDataingo.userDataInfo[this.objIndex].data.firstPage.gender = this.myForm.value.firstPage.gender;
      this.userDataingo.userDataInfo[this.objIndex].data.firstPage.dob = this.myForm.value.firstPage.dob;
      this.userDataingo.userDataInfo[this.objIndex].data.secondPage.phone_no.p1 = this.myForm.value.secondPage.phone_no.p1;
      this.userDataingo.userDataInfo[this.objIndex].data.secondPage.phone_no.p2 = this.myForm.value.secondPage.phone_no.p2;
      this.userDataingo.userDataInfo[this.objIndex].data.secondPage.phone_no.p3 = this.myForm.value.secondPage.phone_no.p3;
      this.userDataingo.userDataInfo[this.objIndex].data.thirdPage.profession = this.myForm.value.thirdPage.profession;
      this.userDataingo.userDataInfo[this.objIndex].data.thirdPage.qualification = this.myForm.value.thirdPage.qualification;
      this.userDataingo.userDataInfo[this.objIndex].data.thirdPage.desc = this.myForm.value.thirdPage.desc;

      alert('Information Updated');
      this.router.navigate(['form']);
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
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
