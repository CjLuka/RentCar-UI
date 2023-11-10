import { Component } from '@angular/core';
import { Register } from '../../models/register.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  model: Register;
  constructor(private authService: AuthService, private router: Router){
    this.model = {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      ConfirmPassword: '',
      phonenumber: ''
    }
  }
  onFormSubmit(): void {
    this.authService.register(this.model).subscribe({
      next: (Response) => {
        this.router.navigateByUrl(`/login`)
      }
    })
  }
}
