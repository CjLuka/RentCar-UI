import { Component } from '@angular/core';
import { LoginRequest } from '../models/login-request.model';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: LoginRequest;

  constructor(private authService: AuthService, private cookieSerivce: CookieService, private router: Router)
  {
    this.model = {
      email: '',
      password: ''
    };
  }

  onFormSubmit(): void
  {
    this.authService.login(this.model)
    .subscribe({
      next: (Response) => {
        if (Response && Response.token) {
          this.cookieSerivce.set('Authorization', `Bearer ${Response.token}`, undefined, '/', undefined, true, 'Strict');
        } else {
          console.log(Response)
          console.error('Nieprawidłowa odpowiedź z serwera.');
          // Tutaj można dodać obsługę innych błędów, jeśli to konieczne.
        }
        this.authService.setUser({
          email: Response.email,
          userName: Response.userName,
          token: Response.token,
          roles: Response.roles,
          id: Response.id
        })


        this.router.navigateByUrl('/')

      }
    });
  }
}
