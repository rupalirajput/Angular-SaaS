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
  userEmail: string;
  userid: number;
  firstName: string;
  userRole: string;

  constructor(private user$: LoginService, private router: Router) { }

  ngOnInit() {
    this.userEmail = 'rupalirajput27@gmail.com';
    this.user$.getLoginDetails(this.userEmail).subscribe((result: IAccountModel[] ) => {
      console.log(result);
      this.userid = result[0].userid;
      this.firstName = result[0].firstName;
      this.userRole = result[0].role;
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user_email', this.userEmail);
      localStorage.setItem('user_role', this.userRole);
      localStorage.setItem('user_id', this.userid.toString());
      this.router.navigate(['/professor_dashboard/']);
    });
  }

  logout(): void {
    console.log('Logout');
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_role');
    this.router.navigate(['/login']);
  }
}
