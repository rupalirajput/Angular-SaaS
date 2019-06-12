import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';
import IAccountModel from '../share/IAccountModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  constructor(private user$: LoginService, private router: Router) {}

  ngOnInit() {
    localStorage.clear();
  }

  googleLogin() {
    console.log('test');
    this.user$.getGoogleLogin().subscribe((result: string) => {
      console.log(result);
    });
  }
}

