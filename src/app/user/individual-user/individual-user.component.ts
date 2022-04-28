import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-individual-user',
  templateUrl: './individual-user.component.html',
  styleUrls: ['./individual-user.component.scss'],
})
export class IndividualUserComponent implements OnInit {
  public id: string;
  public user$: Observable<User>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user$ = this.userService.currentUser;
    this.getId();
  }

  getId() {
    this.activatedRoute.params?.subscribe((params) => {
      if (params['id']) {
        this.id = params['id'];
        this.getUser();
      }
    });
  }

  getUser() {
    this.userService.getUserById(this.id);
  }
}
