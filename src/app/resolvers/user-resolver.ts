//import {Routes} from '@ngrx/router';
import {Routes, RouterModule, Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {Injectable} from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs'
import {User} from '../models/user';
import 'rxjs/add/observable/of';
import {AppState} from '../reducers';
import {UserService} from '../services/user-service';

@Injectable()
export class UserResolve implements Resolve<any> {

  constructor(private store: Store<AppState>, private userService: UserService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
      let user : User = new User();
      user.firstName = "John";
         var userObservable = this.store.select<User>('user');
        return this.userService.getUser(1500);
  }
}