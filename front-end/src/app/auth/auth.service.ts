import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {User} from './user.model'
import {Subject, BehaviorSubject, throwError} from 'rxjs'
import {catchError, tap} from 'rxjs/operators'
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode'
import { GamesService } from '../services/games.service';
import { Game } from '../models/game.model';

export interface AuthResponseData{
  token: string,
  name: string
}


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  user: BehaviorSubject<User> = new BehaviorSubject<User>(null)
  private tokenExpirationTimer: any


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

    return this.http.post<AuthResponseData>('http://localhost:3000/api/user/login',{
      email: email,
      password: password
    }).pipe(catchError(this.handleErrors), tap(resData => {
      console.log('data')

      this.handleAuthentication(resData.name, resData.token)
    }))
  }


  autoLogin(){
    const userData: {name: string, id: string, token: string, expiration: string} = JSON.parse(localStorage.getItem('userData'))

    if(!userData){
      return
    }

    const expirationDate = new Date(userData.expiration)

    const loadedUser = new User(userData.name, userData.id, userData.token, expirationDate)

    if(loadedUser.token){
      const expirationDuration = (+expirationDate*1000) - Date.now()
      this.autoLogout(expirationDuration)
      this.user.next(loadedUser)
    }


  }

  logout(){
    this.user.next(null)
    this.router.navigate(['/login'])
    localStorage.removeItem('userData')

    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer)
    }

    this.tokenExpirationTimer = null
  }
  autoLogout(expirationDuration: number){
    this.tokenExpirationTimer = setTimeout(() => {
      console.log('logged out')
      this.logout()
    }, expirationDuration)
  }

  handleAuthentication(name: string, token: string){
    console.log(name)

    const data = jwt_decode(token)
    const id = data['_id']
    const expirationDate = new Date(+data['exp'])

    const user = new User(name, id, token, expirationDate)
    this.user.next(user)
    const expirationDuration = (+expirationDate*1000) - Date.now()
    this.autoLogout(expirationDuration)

    this.router.navigate(['/games'])
  }





  private handleErrors(errorRes: HttpErrorResponse){
    let errorMessage = errorRes.error

    console.log(errorRes)

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
