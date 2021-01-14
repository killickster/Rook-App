import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup
  error: string

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

        this.signupForm = new FormGroup({
          'username': new FormControl(null, Validators.required),
          'email': new FormControl(null, [Validators.required, Validators.email]),
          'passwords': new FormGroup({
            'password': new FormControl(null, Validators.required),
            'confPassword': new FormControl(null, [Validators.required])
          }, this.passwordValidator.bind(this))


    })
  }


  passwordValidator(group: FormGroup): {[s:string]: boolean}{
    const password = group.controls.password.value
    const confPassword = group.controls.confPassword.value
    if(password !== confPassword){
      return {'password does not match confermation password': true}
    }
    return null 
  }


  onSubmit(){
    console.log(this.signupForm)

    if(this.signupForm.valid){

      const username = this.signupForm.get('username').value
      const email = this.signupForm.get('email').value
      const password = this.signupForm.get('passwords').get('password').value
      this.authService.signup(username, email, password).subscribe(resData => {
        console.log(resData)
        this.router.navigate(['/login'])
      }, errorRes => {
        this.error = errorRes
      })
    }

    this.signupForm.reset()



    this.router

  }


}
