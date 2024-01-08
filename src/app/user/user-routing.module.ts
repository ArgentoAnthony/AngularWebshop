import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {UpdateComponent} from "./update/update.component";
import {CreateVendeurComponent} from "./create-vendeur/create-vendeur.component";
import {UpdateVendeurComponent} from "./update-vendeur/update-vendeur.component";
import {DeleteComponent} from "./delete/delete.component";
import {DetailsComponent} from "./details/details.component";
import {AdminUpdateComponent} from "./admin-update/admin-update.component";
import {AdminDeleteComponent} from "./admin-delete/admin-delete.component";
import {GetUserComponent} from "./get-user/get-user.component";
import {DetailsUserComponent} from "./details-user/details-user.component";

const routes: Routes = [
  {path: "login", component:LoginComponent},
  {path: "register", component:RegisterComponent},
  {path: "update", /*canActivate[IsConnected],*/ component: UpdateComponent},
  {path: "vendeur/create", /*canActivate[IsConnected],*/ component: CreateVendeurComponent},
  {path: "vendeur/update", /*canActivate[IsConnected],*/ component: UpdateVendeurComponent},
  {path: "delete", /*canActivate[IsConnected],*/ component: DeleteComponent},
  {path: "details", /*canActivate[IsConnected],*/ component: DetailsComponent},
  {path: "admin/update", /*canActivate[IsConnected],*/ component: AdminUpdateComponent},
  {path: "admin/delete", /*canActivate[IsConnected],*/ component: AdminDeleteComponent},
  {path: "get-user", /*canActivate[IsConnected],*/ component: GetUserComponent},
  {path: "details-user/:id", /*canActivate[IsConnected],*/ component: DetailsUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
