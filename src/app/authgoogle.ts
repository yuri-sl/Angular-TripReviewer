import { inject, Injectable, signal } from '@angular/core';
import { OAuthService,AuthConfig } from 'angular-oauth2-oidc';
import { auth } from './auth.config';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Authgoogle {
  private oauthService: OAuthService = inject(OAuthService);
  private router:Router = inject(Router);
  profile = signal<any>(null);


  constructor(){
    this.initConfiguration();
  }
  initConfiguration(){
    this.oauthService.configure(auth);
    this.oauthService.setupAutomaticSilentRefresh();
    //Chama o método para tentar login com a pessoa
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {

      if(this.oauthService.hasValidIdToken()){
        this.profile.set(this.oauthService.getIdentityClaims());
      }
    })
  }

  login(){
    this.oauthService.initImplicitFlow();
  }

  logout(){
    this.oauthService.revokeTokenAndLogout();
    this.oauthService.logOut();
    this.profile.set(null);
    this.router.navigate(['']);
  }

  getLoggedProfile(){
    return this.profile();
  }
}
