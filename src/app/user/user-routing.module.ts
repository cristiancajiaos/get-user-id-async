import { IndividualUserComponent } from './individual-user/individual-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'users', component: UsersComponent},
  { path: ':id', component: IndividualUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
