import { CanActivateFn, Router } from '@angular/router';
import { Authgoogle } from './authgoogle';
import { inject, Inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService: Authgoogle = inject(Authgoogle);
  const router:Router = inject(Router);

  const loggedProfile = loginService.getLoggedProfile();

  if(loggedProfile){
    return true;
  }else{
    //se n estiver logado

    router.navigate([''])
    return false;
  }

};
