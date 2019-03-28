import { Component, OnInit } from '@angular/core';
import {UserService} from '../user/user.service';
import {IUser} from '../user/user';
import { Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userList: IUser[] = [];
  userForm = this.fb.group({
    id: [''],
    name: [''],
    email: [''],
    password: ['']

  });
  constructor(private userServe: UserService,
              private route: Router,
              private fb: FormBuilder
              ) {}

  ngOnInit() {
  }
    create() {
      const {value} = this.userForm;
      return this.userServe.create(value).subscribe(next => {
        this.userList.unshift(value);
        this.route.navigate(['../list]']);
      }, error1 => alert('Lỗi'));
    }
}
