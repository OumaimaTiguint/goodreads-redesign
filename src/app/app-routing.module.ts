import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './shared/services/auth/auth-guard.service';

const routes: Routes = [
    {
        path: 'signup',
        loadComponent: () => import('./signup/signup.component').then(mod => mod.SignupComponent)
    },
    {
        path: 'signin',
        loadComponent: () => import('./signin/signin.component').then(mod => mod.SigninComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent),
        canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'signin'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
