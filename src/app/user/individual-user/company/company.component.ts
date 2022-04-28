import { UserService } from './../../user.service';
import { User } from './../../../interfaces/user';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  user$: Observable<User>;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user$ = this.userService.currentUser;
  }

}
