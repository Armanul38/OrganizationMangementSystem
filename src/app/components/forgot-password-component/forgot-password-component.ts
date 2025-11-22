import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './forgot-password-component.html',
  styleUrl: './forgot-password-component.scss'
})
export class ForgotPasswordComponent {
  private fb = inject(FormBuilder);
  
  // Angular 20 Signal
  isEmailSent = signal(false);

  forgotForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  onSubmit() {
    if (this.forgotForm.valid) {
      console.log('Reset requested for:', this.forgotForm.value.email);
      this.isEmailSent.set(true);
    }
  }
}