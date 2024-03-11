import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  

formReg!: FormGroup;
JSON: any;

  constructor(
    private userService: UserService,
    private router: Router,
  ){
    this.formReg = new FormGroup({
      email: new FormControl(''),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    

    console.log(this.formReg.value);
    this.userService.register(this.formReg.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['login'])
      })
      .catch(error => console.log(error))
  }

}
