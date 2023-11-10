import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/features/auth/models/user.model';
import { AuthService } from 'src/app/features/auth/services/auth.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit{
  user?: User;
  constructor(private authService: AuthService){

  }
  ngOnInit(): void {
    this.authService.user()
    .subscribe({
      next: (Response) => {
        this.user = Response;
      }
    });

    this.user = this.authService.getUser();
}
}
