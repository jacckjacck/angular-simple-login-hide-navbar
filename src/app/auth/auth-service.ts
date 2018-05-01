import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { Http, Headers, Response} from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
  token: string;
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: Http, private route: Router) {  }

  get isLoggedIn() {

    if (localStorage.getItem('currentUserToken')) {
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);
    }
    return this.loggedIn.asObservable();
  }

  login(username: string, password: string): Boolean {
    localStorage.setItem('currentUserToken',  'the token');
    this.loggedIn.next(true);
    return true;
  }

  logout() {
    localStorage.removeItem('currentUserToken');
    this.loggedIn.next(false);
    this.route.navigate(['/login']);
  }
}
