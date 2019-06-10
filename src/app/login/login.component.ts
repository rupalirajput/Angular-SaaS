import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;

  constructor(private user$: LoginService, private router: Router) {}

  public signinWithGoogle() {
    // localStorage.setItem('user_email', 'rupalirajput');
    // this.router.navigate(['/professor_dashboard/']);

    this.user$.getGoogleLogin().subscribe((result: string) => {
      this.email = result;
      console.log(result);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user_email', this.email);
      this.router.navigate(['/professor_dashboard/']);
    });
  }
  ngOnInit() {
    if (localStorage.getItem('user_email') != null) {
      this.router.navigate(['/professor_dashboard/']);
    }
  }
}

