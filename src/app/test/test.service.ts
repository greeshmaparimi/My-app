import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TestService {
  constructor(private _httpservice: Http) {}
  retrieveAll(): Observable<Todo[]> {
    return this._httpservice
      .get('http://localhost:8080/users')
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error);
  }
  addUser(user: Todo): Observable<any> {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'content-type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._httpservice.post(
      'http://localhost:8080/users/add',
      body,
      options
    );
  }
}
