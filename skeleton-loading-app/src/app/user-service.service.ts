import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class UserServiceService {

  constructor() { }

  getUsers() {

    const fakeResponse = [
      {
        name: 'Harmandeep',
        email: 'Harman@gmail.com',
        country: 'India'
      },
      {
        name: 'Navdeep',
        email: 'Nav@gmail.com',
        country: 'Canada'
      },
      {
        name: 'Inder',
        email: 'Inder@gmail.com',
        country: 'Australia'
      },
      {
        name: 'Amandeep',
        email: 'Amandeep@gmail.com',
        country: 'Colombia'
      }
    ];

    return Observable.of(fakeResponse).delay(5000);
  }
}
