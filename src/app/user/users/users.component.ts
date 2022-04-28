import { Observable } from 'rxjs';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.users$ = this.userService.currentUsers;
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers();
  }

}
