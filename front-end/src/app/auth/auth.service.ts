import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {User} from './user.model'
import {Subject, throwError} from 'rxjs'
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  user:Subject<User> = new Subject<User>()


  signup(username: string, email: string, password: string){

    return this.http.post('http://localhost:3000/api/user/register', 
    {
      name: username,
      email: email,
      password: password
    }
    ).pipe(catchError(this.handleErrors))
  }

  signin(email: string, password: string){

    return this.http.post('http://localhost:3000/api/user/login',{
      email: email,
      password: password
    }).pipe(catchError(this.handleErrors))
  }



  private handleErrors(errorRes: HttpErrorResponse){
    let errorMessage = errorRes.error

    let message = 'an unkown error has occured'

    switch(errorMessage){
      case 'INVALID_PASSWORD':
        message = 'email or password is incorrect'
        break;
      case 'INVALID_EMAIL':
        message = 'email or password is incorrect'
        break
      case 'USERNAME_EXISTS':
        message = 'this username is taken'
        break
      case 'EMAIL_EXISTS':
        message = "this email is taken"
        break

    }
    return throwError(message)
  }
}
