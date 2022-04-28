import { UserService } from './../../user.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  user$: Observable<User>;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user$ = this.userService.currentUser;
  }

}
