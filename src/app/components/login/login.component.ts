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
  formLogin: FormGroup;

  constructor(
    private userServices: UserService,
    private router: Router

  ){
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }
  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.formLogin.value);
    this.userServices.login(this.formLogin.value)
    .then(result => {
      console.log("result", result);
      this.router.navigate([''])
    })
    .catch(error => console.log(error))
  }



}
