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
        firstPage: {
          'name': 'testhjhghhh',
          'email': 'test@gmihjhjal.com',
          'gender': 'female',
          'dob': '1990-11-19',
        },
        secondPage: {
          'prof_img': 'test.png',
          'hobbies': {
            'Singing': false,
            'Dancing': true,
            'Fighting': false,
            'Playing': true
          },
          'phone_no': {
            p1:'789',
            p2:'654',
            p3:'3210'
          } 
        },
        thirdPage: {

          'qualification': ['Graduation', 'post Graduation'],
          'profession': 'Web Developer',
          'desc': 'test my deshhhhhcriptiom',
          'contactPerson': [
            {
              'personName': 'fffrohit',
              'phoneNo': {
                cp1:'789',
                cp2:'654',
                cp3:'3210'
              } 
            },
            {
              'personName': 'rfffaju',
              'phoneNo': {
                cp1:'709',
                cp2:'604',
                cp3:'3010'
              } 
            }
          ]
        }
      }
    },
    {
      id: 0,
      form: 'tamplate',
      data: {
        firstPage: {
          'name': 'test',
          'email': 'test@gmial.com',
          'gender': 'female',
          'dob': '1990-11-19',
        },
        secondPage: {
          'prof_img': 'test.png',
          'hobbies': {
            'Singing': false,
            'Dancing': true,
            'Fighting': false,
            'Playing': true
          },
          'phone_no': {
            p1:'789',
            p2:'654',
            p3:'3210'
          } 
        },
        thirdPage: {

          'qualification': ['Graduation', 'post Graduation'],
          'profession': 'Web Developer',
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
      }
    },
  ]

  constructor() { }

}
