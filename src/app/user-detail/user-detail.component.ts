import { Component, OnInit } from '@angular/core';
import {IUser} from '../user/user';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
user: IUser;
  constructor(private route: ActivatedRoute,
              private userServe: UserService) { }

  ngOnInit() {
    const id = + this.route.snapshot.paramMap.get('id');
    this.userServe
        .findmyId(id)
        .subscribe(data => (this.user = data));
  }
}
