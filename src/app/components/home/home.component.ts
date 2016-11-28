import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {User} from '../../models/user'
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    private title: string;
    constructor(private route: ActivatedRoute){

        this.title  = "Home Title";
    }
    ngOnInit(){
    //    let user = this.route.snapshot.data['user'];
    }
}