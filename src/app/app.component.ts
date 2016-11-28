import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { INCREMENT, DECREMENT, RESET } from './counter-reducer';
import {Observable} from 'rxjs'
import {AppState} from './reducers';
import {UserActions} from './actions/user-actions';
import {User} from './models/user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
//   template: `
//         <button (click)="increment()">Increment</button>
//         <div>Current Count: {{ counter | async }}</div>
//         <button (click)="decrement()">Decrement</button>

//         <button (click)="reset()">Reset Counter</button>
//     `,
//   styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    counter: Observable<number>;
    user: Observable<any>;

    constructor(private store: Store<AppState>, 
    private userActions: UserActions,){
        // this.counter = <Observable<number>>store.select('counter');
    }
    ngOnInit(){
        this.store.dispatch(this.userActions.loadUser(1500));
        this.user = this.store.select('user');
        console.log('this.user');
        console.log(this.user);
    }

    loadUser() {
        console.log('loadUser');
        this.store.dispatch(this.userActions.loadUser(1500));
        this.user = this.store.select('user');   
    }
    // increment(){
    //     this.store.dispatch({ type: INCREMENT });
    // }

    // decrement(){
    //     this.store.dispatch({ type: DECREMENT });
    // }

    // reset(){
    //     this.store.dispatch({ type: RESET });
    // }
  }
