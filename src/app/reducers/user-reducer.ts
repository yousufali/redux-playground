import { ActionReducer, Action } from '@ngrx/store';
import {Injectable} from '@angular/core';
import { User } from '../models/user'
import { Client } from '../models/client'
import { UserActions } from '../actions/user-actions'

export type userState = User;
interface UserData{
    isFetching: boolean,
    user: User
}

const GET_USER = 'GET_USER';
const initialState : UserData = {isFetching: true, user: null};

export const userReducer: ActionReducer<UserData> = (state: UserData = initialState, action: Action) => {
    switch (action.type) {
       case UserActions.LOAD_USER:
            return initialState;
       case UserActions.LOAD_USER_SUCCESS:
            return action.payload;
       case UserActions.GET_USER:
            return action.payload;
        default:
            return state;            
    }
}
