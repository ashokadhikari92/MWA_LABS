import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = formBuilder.group({
      'firstName' : ['', [Validators.required]],
      'lastName' : ['',[Validators.required]],
      'email' : ['',[Validators.required]],
      'password' : ['',[Validators.required]],
      'confirmPassword' : ['',[Validators.required]],
      'accept' : [0]
    });

    this.signupForm.valueChanges.subscribe((value) => console.log(value));
  }

  ngOnInit() {
  }

  onSubmit(){

  }
}
