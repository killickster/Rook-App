import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup

  constructor() { }

  ngOnInit(): void {

        this.signupForm = new FormGroup({
          'username': new FormControl(null, Validators.required),
          'email': new FormControl(null, [Validators.required, Validators.email]),
          'password': new FormControl(null, Validators.required),
          'confPassword': new FormControl(null, [Validators.required])

    })
  }




  onSubmit(){
    console.log(this.signupForm)
  }


}
