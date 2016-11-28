import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

import {AppState} from '../reducers';
import {UserActions} from '../actions/user-actions';
import {UserService} from '../services/user-service';
import 'rxjs/operator/switchMap';
import 'rxjs/operator/map';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'

@Injectable()
export class UserEffects {
    constructor (
        private update$: Actions,
        private userActions: UserActions,
        private svc: UserService,
    ) {}

    @Effect() loadUsers$ = this.update$
        .ofType(UserActions.LOAD_USER)
        .map<number>(action => action.payload)
        .switchMap(userID => this.svc.getUser(userID))
        .map(user => this.userActions.loadUserSuccess(user));

    // @Effect() getHero$ = this.update$
    //     .ofType(HeroActions.GET_HERO)
    //     .map<string>(action => action.payload)
    //     .switchMap(id => this.svc.getHero(id))
    //     .map(hero => this.heroActions.getHeroSuccess(hero));

    // @Effect() saveHero$ = this.update$
    //     .ofType(HeroActions.SAVE_HERO)
    //     .map(action => action.payload)
    //     .switchMap(hero => this.svc.saveHero(hero))
    //     .map(hero => this.heroActions.saveHeroSuccess(hero));

    // @Effect() addHero$ = this.update$
    //     .ofType(HeroActions.ADD_HERO)
    //     .map(action => action.payload)
    //     .switchMap(hero => this.svc.saveHero(hero))
    //     .map(hero => this.heroActions.addHeroSuccess(hero));

    // @Effect() deleteHero$ = this.update$
    //     .ofType(HeroActions.DELETE_HERO)
    //     .map(action => action.payload)
    //     .switchMap(hero => this.svc.deleteHero(hero))
    //     .map(hero => this.heroActions.deleteHeroSuccess(hero));
}