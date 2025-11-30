import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss'
})
export class SignupComponent {
  private fb = inject(FormBuilder);
  private signUpService = inject(SignUpService);
  private router = inject(Router);

  // State signals
  isLoading = signal(false);
  errorMessage = signal('');

  // Your corrected form group
  signupForm = this.fb.group({
    userName: ['', Validators.required], // Matches Java 'username'
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    firstName: [''], 
    lastName: ['']
  });

  onSubmit() {
    // 1. Validate Form
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched(); // Show errors
      return;
    }

    // 2. Prepare UI
    this.isLoading.set(true);
    this.errorMessage.set('');

    // 3. Call API
    this.signUpService.register(this.signupForm.value).subscribe({
      next: (response) => {
        console.log('Success:', response);
        alert('Registration Successful! Please Login.');
        this.router.navigate(['/login']); // Redirect to login
      },
      error: (error) => {
        console.error('Error:', error);
        this.isLoading.set(false);
        // Show backend error message (e.g., "Username already exists")
        this.errorMessage.set(error.error || 'Registration failed.');
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });
  }
}