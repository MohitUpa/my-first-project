import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Subscription } from 'rxjs';
import { UserDataService } from 'src/app/user-data.service';
import { RegisService } from '../regis.service';

@Component({
  selector: 'app-edit-reactive-form-assign',
  templateUrl: './edit-reactive-form-assign.component.html',
  styleUrls: ['./edit-reactive-form-assign.component.css']
})
export class EditReactiveFormAssignComponent implements OnInit, OnDestroy {
  myForm: FormGroup;
  gender: string;
  stepdata1 = true;
  dropdownList = [];
  dropdownSettings: IDropdownSettings = {};
  editDataId: any;
  objIndex: any;
  serviceData: any;
  addedhob = [];
  hobbyInput = false;
  sub: Subscription;
  hobbies = [ ];
  hobbieControls = {}

  constructor(private modalService: NgbModal,
    private userDataingo: UserDataService,
    private route: ActivatedRoute,
    private router: Router,
    private regis: RegisService) {
  }
  // hobby


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

  oldVal;
  oldhob;
  contectP;
  oldHob;
  ngOnInit() {

    this.sub = this.route.params.subscribe(params => this.editDataId = params['id']);
    this.objIndex = this.userDataingo.userDataInfo.findIndex((obj => obj.id == this.editDataId));
    this.serviceData = this.userDataingo.userDataInfo[this.objIndex].data
    this.oldhob = this.serviceData.secondPage.hobbies;
    this.contectP = this.serviceData.thirdPage.contactPerson;

    for (const [key, val] of Object.entries(this.serviceData.secondPage.hobbies)) {
      this.hobbies.push({ label: key, selected: false },)
      this.hobbieControls[key] = new FormControl(val);
    }

    this.stepdata1 = true;
    this.dropdownList = [
      "Graduation", "post Graduation"
    ];
    this.dropdownSettings = {};

    this.myForm = new FormGroup({
      firstPage: new FormGroup({
        id: new FormControl(this.editDataId),
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
        contactPerson: new FormArray([])
      })
    });

    for (const contactData of this.contectP) {
      (<FormArray>this.myForm.get('thirdPage.contactPerson')).push(
        new FormGroup({
          personName: new FormControl(contactData.personName, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
          personNumber: new FormGroup({
            cp1: new FormControl(contactData.personNumber.cp1, [Validators.required, Validators.pattern('^[0-9]{3}$')]),
            cp2: new FormControl(contactData.personNumber.cp2, [Validators.required, Validators.pattern('^[0-9]{3}$')]),
            cp3: new FormControl(contactData.personNumber.cp3, [Validators.required, Validators.pattern('^[0-9]{4}$')]),
          })
        }),
      )
    }

  }

  onUpdateData() {

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
      this.regis.updateData({ form: 'reactive', data: this.myForm.value }, this.myForm.value.firstPage.id)
      alert('Information Updated');
      this.userDataingo.userDataInfo = [];
      this.router.navigate(['form']);
      for (let hob of this.addedhob) {
        for (var hobby in this.hobbies) {
          const test = this.hobbies[hobby];
          if (test.label == hob) {
            this.hobbies.splice(+hobby, 1);
          }
        }
      }
      this.myForm.reset();
    }
    this.stepdata1 = false;
  }

  get control() {
    return (<FormArray>this.myForm.get('thirdPage.contactPerson')).controls;
  }

  addPerson() {
    (<FormArray>this.myForm.get('thirdPage.contactPerson')).push(
      new FormGroup({
        personName: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
        personNumber: new FormGroup({
          cp1: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{3}$')]),
          cp2: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{3}$')]),
          cp3: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{4}$')]),
        })
      }),
    )
  }

  removePerson(i: number) {
    (<FormArray>this.myForm.get('thirdPage.contactPerson')).removeAt(i);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
