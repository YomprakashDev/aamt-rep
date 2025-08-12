import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServices } from '../../../services/auth-services';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthServices,) { }
  router = inject(Router)
  
  onLogin() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    this.router.navigateByUrl('/app')
  }

  async onGoogleSignIn() {
    try {
      await this.authService.googleSignIn();
      // Navigate to dashboard on success
      await this.router.navigateByUrl('/app')
    } catch (err) {
      console.error('Google sign-in error', err);
      // show user-friendly error in UI
    }
  }

}
