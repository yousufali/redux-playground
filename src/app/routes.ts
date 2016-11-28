//import {Routes} from '@ngrx/router';
import {Routes, RouterModule, Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {Injectable} from '@angular/core';
import { Store } from '@ngrx/store';
import {AppState} from './reducers';
import {Observable} from 'rxjs'
import {HomeComponent} from './components/home/home.component';
import {AuthComponent} from './components/login/auth.component';
import {User} from './models/user';
import 'rxjs/add/observable/of';
import {UserResolve} from './resolvers/user-resolver';

let user : User = new User();

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'auth',
        component: AuthComponent
    }
];


//export default routes;
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
