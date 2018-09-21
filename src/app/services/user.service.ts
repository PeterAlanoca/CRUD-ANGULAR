import { Injectable } from '@angular/core';
import { Http, Response } from '../../../node_modules/@angular/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ResponseData } from '../models/response/response-data';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = 'http://192.168.0.14/userService/';

  constructor(private http:Http) { }

  getAll():Observable<ResponseData> {
    return (this.http.get(this.URL + 'V1/user/get/all')
      .pipe(
        map((response:Response) => response.json()),
        catchError((exception:Response) => throwError(exception))
      )  
    );
  }

  get(id:number):Observable<ResponseData> {
    return (this.http.get(this.URL + 'V1/user/get/' + id)
      .pipe(
        map((response:Response) => response.json()),
        catchError((exception:Response) => throwError(exception))
      )  
    );
  }

  insert(user:User):Observable<ResponseData> {
    return (this.http.post(this.URL + 'V1/user/insert', JSON.stringify(user))
      .pipe(
        map((response:Response) => response.json()),
        catchError((exception:Response) => throwError(exception))
      )  
    );
  }

  update(user:User):Observable<ResponseData> {
    return (this.http.post(this.URL + 'V1/user/update', JSON.stringify(user))
      .pipe(
        map((response:Response) => response.json()),
        catchError((exception:Response) => throwError(exception))
      )  
    );
  }

  delete(id:number):Observable<ResponseData> {
    return (this.http.post(this.URL + 'V1/user/delete', JSON.stringify({'id': id}))
      .pipe(
        map((response:Response) => response.json()),
        catchError((exception:Response) => throwError(exception))
      )  
    );
  }
}
