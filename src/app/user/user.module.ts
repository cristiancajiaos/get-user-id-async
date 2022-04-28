import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './user.component';
import { IndividualUserComponent } from './individual-user/individual-user.component';
import { UsersComponent } from './users/users.component';
import { AddressComponent } from './individual-user/address/address.component';
import { CompanyComponent } from './individual-user/company/company.component';
import { BasicInfoComponent } from './individual-user/basic-info/basic-info.component';

@NgModule({
  declarations: [
    UserComponent,
    IndividualUserComponent,
    UsersComponent,
    AddressComponent,
    CompanyComponent,
    BasicInfoComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
