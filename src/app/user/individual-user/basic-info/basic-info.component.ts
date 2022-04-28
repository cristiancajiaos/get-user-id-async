import { UserService } from './../../user.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  user$: Observable<User>;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user$ = this.userService.currentUser;
  }

}
