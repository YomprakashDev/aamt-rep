import { Routes } from '@angular/router';
import { Login } from './modules/auth/login/login';
import { MainLayoutComponent } from './layout/main-layout-component/main-layout-component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
   {
    path:'login',
    component:Login
   },

   {
    path:'dashboard',
    component:MainLayoutComponent
   }
];
