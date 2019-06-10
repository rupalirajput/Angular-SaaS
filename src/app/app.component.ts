import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'QuizApp';
  userEmail: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.userEmail = localStorage.getItem('user_email');
    console.log(this.userEmail);

  }

  logout(): void {
    console.log('Logout');
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('user_email');
    this.router.navigate(['/login']);
  }
}
