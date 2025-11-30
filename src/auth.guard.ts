import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  // Check if token exists in local storage
  const token = localStorage.getItem('token'); 

  if (token) {
    return true; // Allow access
  } else {
    router.navigate(['/login']); // Redirect to login
    return false;
  }
};