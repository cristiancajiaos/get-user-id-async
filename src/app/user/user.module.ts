import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './user.component';
import { IndividualUserComponent } from './individual-user/individual-user.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    UserComponent,
    IndividualUserComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
