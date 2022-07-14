import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  userDataInfo = [
    // {
    //   id: -1,
    //   form: 'Reactive',
    //   data: {
    //     firstPage: {
    //       name: 'test',
    //       email: 'test@gmial.com',
    //       gender: 'male',
    //       dob: '1990-05-20'
    //     },
    //     secondPage: {
    //       hobbies: {
    //         Fighting: true,
    //         Playing: false,
    //         Singing: true,
    //       },
    //       phone_no: {
    //         p1: "787",
    //         p2: "787",
    //         p3: "8787"
    //       }
    //     },
    //     thirdPage: {
    //       contactPerson: [
    //         {

    //         }
    //       ],
    //       desc:"Qui possimus corpor",
    //       profession:"Data Scientist",
    //       qualification:['Graduation']
    //     }
    //   }
    // }
  ]

  constructor() { }

}
