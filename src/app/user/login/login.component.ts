import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../shared/Services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup
  errorMessage: string | undefined
  constructor(
    private userService: UserService,
    private form: FormBuilder,
    private router: Router) {

    this.loginForm = form.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    })
    }
    login(): void{

    if(this.loginForm.valid){
      this.userService.login(this.loginForm.value).subscribe({
        next:()=>{this.router.navigate(["/home"])},
        error: (error)=> this.errorMessage=error.error
      })
    }
  }
}

