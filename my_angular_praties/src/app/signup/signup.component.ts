import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validator } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})

export class SignupComponent {
  signupform! : FormGroup;

  constructor(private fb: FormBuilder){

  }

}


