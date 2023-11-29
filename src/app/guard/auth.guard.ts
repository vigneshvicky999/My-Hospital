import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = (route) => {
  const currentmenu= route.url [0].path;
const router = inject(Router);
const authentication = inject(AuthService);

if (authentication.isLoggedIn()){
  return true; 
  }
  else {
  alert('Access denied');
  alert('Please Login')
    router.navigate(['']);
    return false;
  
  }
};
