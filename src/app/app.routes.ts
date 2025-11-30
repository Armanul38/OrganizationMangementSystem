import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login.component';
import { SignupComponent } from './components/sign-up-component/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password-component/forgot-password-component';
import { DashboardComponent } from './components/layouts/dashboard/dashboard-component';
import { HeaderComponent } from './components/layouts/header/header-component/header-component';
import { SidebarComponent } from './components/layouts/sidebar/sidebar-component';
import { FooterComponent } from './components/layouts/footer/footer-component';
import { authGuard } from '../auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },

  // Protected Dashboard Routes
  { 
    path: 'dashboard', 
    component: DashboardComponent, // This now uses the new Layout Shell
    //canActivate: [authGuard], 
    children: [
      // We will add the Dashboard Home component here in the next step
       { path: 'header', component: HeaderComponent }, 
       { path: 'sidebar', component: SidebarComponent }, 
       { path: 'footer', component: FooterComponent }, 
    ]
  },
  // Redirect unknown paths to home
  { path: '**', redirectTo: '' }

];
