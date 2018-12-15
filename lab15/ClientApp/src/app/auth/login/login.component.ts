import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.loginForm = formBuilder.group({
      'email' : [''],
      'password' : [''],
      'remember' : [1]
    });

    this.loginForm.valueChanges.subscribe(
      (data: any) => console.log(data)
    );
  }

  onSubmit(){
    console.log(this.loginForm);
  }

}
