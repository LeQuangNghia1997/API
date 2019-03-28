import { Component, OnInit } from '@angular/core';
import {UserService} from '../user/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  constructor(private userServe: UserService,
              private route: Router,
              private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    confirm('Chắc kèo không ?');
    const  id = +this.activateRoute.snapshot.paramMap.get('id');
    this.userServe.delete(id).subscribe(() => {
      this.route.navigate(['../list']);
    });
  }

}
