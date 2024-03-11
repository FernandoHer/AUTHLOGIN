import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    FormsModule,
    ReactiveFormsModule,
    importProvidersFrom(provideFirebaseApp(() => initializeApp(
    {
      "projectId":"fir-auth-28c9d",
      "appId":"1:188210922270:web:fd03ef0089207306527f0f",
      "storageBucket":"fir-auth-28c9d.appspot.com",
      "apiKey":"AIzaSyAFBNCxk_jGBV6f5n1UzeOaOYqAcr7KdtM",
      "authDomain":"fir-auth-28c9d.firebaseapp.com",
      "messagingSenderId":"188210922270"}))), 
      importProvidersFrom(provideAuth(() => getAuth()))]
};
