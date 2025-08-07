import { Routes } from '@angular/router';
import { Login } from './modules/auth/login/login';
import { MainLayoutComponent } from './layout/main-layout-component/main-layout-component';
import { Settings } from './components/settings/settings';
import { Dashboard } from './components/dashboard/dashboard';
import { Documents } from './components/documents/documents';
import { NewTemplate } from './components/new-template/new-template';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login,


    },

    {
        path: 'app',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',

            },
            {
                path: 'dashboard', component: Dashboard
            },
            {
                path: 'settings', component: Settings
            },
            {
                path: 'documents', component: Documents
            },
            {
                path: 'new-template', component: NewTemplate
            },
        ]
    }
];
