import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
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
  userEmail: string;

  constructor(private user$: LoginService, private router: Router) {
  }

  ngOnInit() {
    this.user$.getUser().subscribe((result: string) => {
      console.log(result);
      this.userId = result['id'];
      this.userName = result['displayName'];
      this.userEmail = result['emails'][0]['value'];
      this.userRole = localStorage.getItem('user_role');
    }, error => {
      console.log('Failed to load user. ' + error);
    });
  }

  logout(): void {
    console.log('Logout');
    localStorage.clear();
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_role');
    this.router.navigate(['/login']);
  }
}
