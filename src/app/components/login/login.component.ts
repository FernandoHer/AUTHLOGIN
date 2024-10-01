import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isBtnDisabled: boolean = false;
  error: any;
  logo: string = "./../assets/logoGreet.png";

  constructor(
    private userServices: UserService,
    private router: Router

  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }
  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.userServices.login(this.loginForm.value)
      .then(result => {
        console.log("result", result);
        this.router.navigate([''])
      })
      .catch(error => console.log(error))
  }

  onClick() {
    this.userServices.loginWithGoogle()
      .then((response) => {
        console.log("Respuesta de Google", response);
        this.router.navigate(['/main'])
      })
      .catch((error) => console.log("Google", error))
  }



}
