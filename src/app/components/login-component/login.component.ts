import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private loginService = inject(LoginService);
  private email: string = "";
  private password: string = "";
  private router = inject(Router);
  
  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit() {
    const params = { email: this.email, password: this.password };
    
    this.loginService.login(this.loginForm.value).subscribe({
      next: () => {
        console.log("Success");
        this.router.navigate(['/dashboard']);
      },
      error: (err) => alert("Login Failed")
    });
  }
}