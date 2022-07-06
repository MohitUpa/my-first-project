import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  userDataInfo = [
    {
      id: -1,
      form: 'tamplate',
      data: {
        'name': 'testo',
        'email': 'test0@gmial.com',
        'gender': 'male',
        'dob': '1990-08-12',
        'prof_img': 'test0.png',
        'hobbies': {
          'Singing': true,
          'Dancing': false,
          'Fighting': true,
          'Playing': true
        },
        'phone_no': '777-000-7777',
        'qualification': ['Graduation'],
        'profession': '3',
        'desc': 'test my descriptiom2',
        'contactPerson': [
          {
            'personId': 1,
            'personName': 'rohit',
            'phoneNo': '707-087-7887',
          }
        ]
      }
    },
    {
      id: 0,
      form: 'tamplate',
      data: {
        'name': 'test',
        'email': 'test@gmial.com',
        'gender': 'female',
        'dob': '1990-11-19',
        'prof_img': 'test.png',
        'hobbies': {
          'Singing': false,
          'Dancing': true,
          'Fighting': false,
          'Playing': true
        },
        'phone_no': '777-777-7777',
        'qualification': ['Graduation', 'post Graduation'],
        'profession': '2',
        'desc': 'test my descriptiom',
        'contactPerson': [
          {
            'personName': 'fffrohit',
            'phoneNo': '707-787-7887',
          },
          {
            'personName': 'rfffaju',
            'phoneNo': '100-787-7007'
          }
        ]
      }
    },
  ]

  constructor() { }

}
