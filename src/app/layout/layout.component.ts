import { User } from './../interfaces/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  result: User[] = [];


  users$: Observable<User[]>;
  user: Observable<User>;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.users$ = this.userService.currentUsers;
    this.userService.getUsers();

    this.user = this.userService.currentUser;
    this.userService.getUserById('1');
  }



}
