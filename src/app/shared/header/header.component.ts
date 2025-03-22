import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isDarkTheme = false;
  constructor(private http: HttpClient, private router: Router) {}

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
    console.log("Theme toggled:", this.isDarkTheme);
  }
  navigateHome() {
    this.router.navigate(['/']);
  }
  signup()
  {
    console.log("You have successfully signed up");
    this.router.navigate(['/signup']); // Redirect to Signup component

  }
  signin()
  {
    console.log("You have successfully signed in");
  }
}
