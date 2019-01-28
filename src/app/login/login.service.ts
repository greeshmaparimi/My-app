import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs';
import { Todo } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpservice: Http) {}
  login(login: LoginUser): Observable<any> {
    const body = JSON.stringify(login);
    const headers = new Headers({ 'content-type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.httpservice.post(
      'http://localhost:8080/users/login',
      body,
      options
    );
  }
  private handleError(error: Response) {
    return Observable.throw(error);
  }
}

export interface LoginUser {
  emailid: string;
  password: string;
}
