import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {Client} from '../models/client';
import 'rxjs/add/operator/map'

@Injectable()
export class ClientService {
    constructor (private http: Http) {}

    getUser(clientID): Observable<Client> {
        return this.http.get('http://localhost:3000/api/clients/' + clientID)
        .map(res => res.json());
    }
}