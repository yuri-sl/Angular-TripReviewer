import { AuthConfig } from "angular-oauth2-oidc";

export const auth:AuthConfig = {
    issuer: 'https://accounts.google.com',
    redirectUri: window.location.origin,
    clientId: '120614693286-dif0dnt7u1gpji1emh1c0pjco6vqv68j.apps.googleusercontent.com',
    scope: 'openid profile email',
    strictDiscoveryDocumentValidation: false
}