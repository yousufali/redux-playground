import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { UserService } from '../../services/user-service'
import { ClientService } from '../../services/client-service'

@Component({
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
    private title: string;
    constructor(private userService: UserService, 
    private clientService: ClientService){
        this.title  = "Home Title";
    }

    ngOnInit(){
        this.userService.getUser(1500).subscribe(function(u){
            console.log('u');
            console.log(u);
        });
    }
}