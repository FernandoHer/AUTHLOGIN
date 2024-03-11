import { Component } from '@angular/core';
import { UserService } from '../../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(
    private userServise: UserService,
    private router:Router
  ){}


  onClick(){
    this.userServise.logout()
    .then(response => this.router.navigate(['/register']))
    .catch(error => console.log(error))
  }
}
