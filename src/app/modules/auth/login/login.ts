import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
 email: string = '';
  password: string = '';
router = inject(Router)
  onLogin() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    this.router.navigateByUrl('/dashboard')
  }
}
