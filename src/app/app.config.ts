import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts';
import { routes } from './app.routes';
// ✅ Import AngularFire initialization functions
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyChfno8-A3FUs7ZmfYjz4a3aV_QVYtoVgk',
  authDomain: 'aamt-login-test.firebaseapp.com',
  projectId: 'aamt-login-test',
  storageBucket: 'aamt-login-test.firebasestorage.app',
  messagingSenderId: '747701155359',
  appId: '1:747701155359:web:c39e356aef28a1318d472a',
  measurementId: 'G-9MXPBQ8G2L',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideEchartsCore({ echarts }),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
  ],
};
``;
