import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $user = new BehaviorSubject<User | undefined>(undefined);

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.apiBaseUrl}/Api/Auth/Login`, {
      email: request.email,
      password: request.password
    });
  }


  setUser(user: User): void 
  {

    this.$user.next(user);
    localStorage.setItem('user-email', user.email);
    localStorage.setItem('user-userName', user.userName);
    localStorage.setItem('user-token', user.token);
    localStorage.setItem('user-roles', user.roles.join(','));
    localStorage.setItem('user-id', user.id)
  }
   
  user(): Observable<User | undefined>{
    return this.$user.asObservable();
  }

  //funkcja która pomaga utrzymywać sesje po odświeżeniu aplikacji
  getUser(): User | undefined{
    const email = localStorage.getItem('user-email');
    const userName = localStorage.getItem('user-userName');
    const token = localStorage.getItem('user-token');
    const roles = localStorage.getItem('user-roles')
    const id = localStorage.getItem('user-id')

    if(email && userName && token && roles && id) {
      const user: User ={
        email: email,
        userName: userName,
        token: token,
        roles: roles.split(','),
        id: id
        //roles: roles  
      }

      return user;
    }
    return undefined;
  }

  //wylogowanie
  logout(): void{
    localStorage.clear();
    this.cookieService.delete('Authorization', '/');
    this.$user.next(undefined);
  }
  // getUserIdFromLocalStorage(): string {
  //   return this.localStorage.getItem('user-id');
  // }

  register(data: Register): Observable<any>
  {
    return this.http.post<any>(`${environment.apiBaseUrl}/api/auth/register`, data);
  } 
}