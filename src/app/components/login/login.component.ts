import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateforms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type: string = "password"
  isText: boolean = false;
eyeIcon: string ="fa-eye-slash";
loginForm!: FormGroup;
ImeK: boolean=true;;
public color: string="s";
    constructor(private fb: FormBuilder) { }  
    
    ngOnInit(): void{
      this.loginForm=this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      })
    }

    hideShowPass(){
      this.isText=!this.isText;
      this.isText?this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
      this.isText ?this.type="text" :this.type="password";
    }
    onSubmit(){

      if(this.loginForm.valid){
        //send the obj to db

      }
      else{
        ValidateForm.validateAllFormFields(this.loginForm);
alert("Pogresan unos i validacija!");
        //throw the error using toaster and with req. data
      }
    }



}
