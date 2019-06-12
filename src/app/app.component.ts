import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from './services/login.service';
import IAccountModel from './share/IAccountModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'QuizApp';
  userName: string;
  userId: string;
  userRole: string;

  constructor(private user$: LoginService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('user_id') == null) {
      this.router.navigate(['/login/']);
    }

    this.userId = localStorage.getItem('user_id');
    this.userName = localStorage.getItem('user_name');
    this.userRole = localStorage.getItem('user_role');
  }

  logout(): void {
    console.log('Logout');
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_role');
    this.router.navigate(['/login']);
  }
}
