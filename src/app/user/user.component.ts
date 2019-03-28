import {Component, OnInit} from '@angular/core';
import {IUser} from './user';
import {UserService} from './user.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    userList: IUser[] = [];

    constructor(private  userServe: UserService) {
    }

    ngOnInit() {
        this.getAll();
    }

    getAll() {
        this.userServe.getAll().subscribe(data => {
            this.userList = data;
        });
    }
}
