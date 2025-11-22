import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { LoginComponent } from './components/login-component/login-component';
import { SignupComponent } from './components/sign-up-component/sign-up-component';
import { ForgotPasswordComponent } from './components/forgot-password-component/forgot-password-component';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  // Redirect unknown paths to home
  { path: '**', redirectTo: '' }

];
