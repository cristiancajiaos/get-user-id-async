import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  result: User[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<User[]>(`/users`).subscribe(result => {
      console.log(result);
      this.result = result;
    });
  }



}
