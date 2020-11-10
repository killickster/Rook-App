import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  signup(username: string, email: string, password: string){

    return this.http.post('http://localhost:3000/api/user/register', 
    {
      name: username,
      email: email,
      password: password
    }
    
    )
  }
}
