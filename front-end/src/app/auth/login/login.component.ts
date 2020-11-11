import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import jwt_decode from 'jwt-decode'
import { Observable } from 'rxjs';
import {AuthResponseData} from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  error: string = null

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
  }

  onSubmit(){

    console.log(this.loginForm)

    if(this.loginForm.valid){

      const email = this.loginForm.get('email').value
      const password = this.loginForm.get('password').value

      this.authService.signin(email, password).subscribe(resData => {
        console.log(resData)
      }, errorMessage => {
        this.error = errorMessage
        console.log(this.error)
      })
    }

    this.loginForm.reset()
  }

}
