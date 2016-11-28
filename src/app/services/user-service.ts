import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {Client} from '../models/client';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/delay'

@Injectable()
export class UserService {
    constructor (private http: Http) {}

    getUser(userID): Observable<User> {
        console.log('userService userID');
        console.log(userID);
        return this.http.get('http://localhost:3000/api/users/' + userID)
        .delay(3000)
        .map(function(res) {
            return res.json();
        });
    }
}