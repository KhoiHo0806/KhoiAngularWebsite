import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { WatchPageComponent } from './watch-page/watch-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FilteredPageComponent } from './filtered-page/filtered-page.component';
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
    },
    {
        path:"watch-page/:id",
        component: WatchPageComponent,
        canActivate:[authGuard]
    },
    {
        path:"filtered-page/:option/:optionName",
        component: FilteredPageComponent,
        canActivate: [authGuard]
    },
    {
        path:'**',
        component:PageNotFoundComponent

    }
];
