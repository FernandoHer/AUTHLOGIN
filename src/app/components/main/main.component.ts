import { Component } from '@angular/core';
import { UserService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {


  passwordFieldType: string = 'password';
  nameRouter = "gsrouter-ru34";

  public routerForm: FormGroup = this.fb.group({
    clientId: ["", [Validators.required]],
    branchId: ["", [Validators.required]],
    apiKey: ["", [Validators.required]],
    routerName: ["", [Validators.required]],
  })


  constructor(
    private fb: FormBuilder,
    private userServices: UserService,
    private router: Router

  ) {
    /*this.routerForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })*/
  }
  ngOnInit(): void {

  }


  onSubmit() {
    console.log(this.routerForm.value);
    /*this.userServices.login(this.routerForm.value)
      .then(result => {
        console.log("result", result);
        this.router.navigate([''])
      })
      .catch(error => console.log(error))*/
  }

  onClick() {
    console.log(this.routerForm.value);
    /*this.userServices.loginWithGoogle()
      .then((response) => {
        console.log("Respuesta de Google", response);
        this.router.navigate(['/main'])
      })
      .catch((error) => console.log("Google", error))*/
  }

  isValidField(field: string): boolean | null {
    return this.routerForm.controls[field].errors &&
      this.routerForm.controls[field].touched;
  }

  togglePasswordVisibility(): void {
    console.log("OJO")
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  getFieldError(field: string): string | null {
    if (!this.routerForm.controls[field]) return null;
    const errors = this.routerForm.controls[field].errors || {};
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'This field is required';
        case 'email':
          return `Please enter a correct email.`;
        case 'minlength':
          return `The password must have a minimum of ${errors['minlength'].requiredLength} characters.`;
        case 'maxlength':
          return `The password must have a maximun of ${errors['maxlength'].requiredLength} characters.`;

      }
    }
    return null
  }

  logout(){
    this.router.navigateByUrl("/login")
  }

}
