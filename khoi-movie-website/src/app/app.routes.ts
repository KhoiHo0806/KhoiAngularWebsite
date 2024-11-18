import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {
        path:"",
        component: LoginPageComponent
    },
    {
        path:"main-page",
        component: MainPageComponent,
        canActivate:[authGuard]
    }
];
