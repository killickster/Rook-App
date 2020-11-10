import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import jwt_decode from 'jwt-decode'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
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
      this.authService.signin(email, password).subscribe(res => {
        console.log(res)

        console.log(jwt_decode(res['token']))

        
      })
    }
  }

}
