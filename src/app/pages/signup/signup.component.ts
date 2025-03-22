import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';
  constructor(private router: Router) {}

  // Form Submission Handler
  onSubmit() {
    if (this.name && this.email && this.password.length >= 6) {
      console.log('Signup successful!', { name: this.name, email: this.email });
      alert('Signup successful!'); // Simulate success
      this.router.navigate(['/']); // Navigate back after signup
    } else {
      alert('Please fill in all fields correctly.');
    }
  }

  // Navigation Back
  goBack() {
    this.router.navigate(['/']);
  }
}
