import { HttpClient } from '@angular/common/http';
import { DEFAULT_USER, DEFAULT_USERS } from './../constants/DEFAULT_USER';
import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUsers = new BehaviorSubject<User[]>(DEFAULT_USERS);
  currentUser = new BehaviorSubject<User>(DEFAULT_USER);

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): void {
    console.log('getUsers()');
    this.http.get<User[]>(`/users`).subscribe(users => {
      console.log(users);
      this.currentUsers.next(users);
    });
  }

  getUserById(id: string): void {
    this.http.get<User>(`/users/${id}`).subscribe(user => {
      this.currentUser.next(user);
    });
  }
}
