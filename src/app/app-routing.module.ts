import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserComponent} from './user/user.component';
import {UserCreateComponent} from './user-create/user-create.component';
const routes: Routes = [
  {path: 'home',  component: UserComponent},
  {path: 'create', component: UserCreateComponent},
  {path: 'user/:id', component: UserDetailComponent},
  {path: 'list', component: UserComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
