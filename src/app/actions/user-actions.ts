import {Injectable} from '@angular/core';
import { User } from '../models/user'
import { ActionReducer, Action } from '@ngrx/store';

@Injectable()
export class UserActions {
    static LOAD_USER = '[user] Load User';
    loadUser(userID): Action {
        return {
            type: UserActions.LOAD_USER,
            payload: userID
        };
    }
    static LOAD_USER_SUCCESS = '[User] Load User Success';
    loadUserSuccess(user): Action {
        return {
            type: UserActions.LOAD_USER_SUCCESS,
            payload: {isFetching: false, user: user}
        };
    }

    static GET_USER = '[User] Get User';
    getUser(userID): Action {
        return {
            type: UserActions.GET_USER,
            payload: userID
        }
    }
}