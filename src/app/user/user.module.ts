import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { UserComponent } from './user.component';
import { CreateVendeurComponent } from './create-vendeur/create-vendeur.component';
import { UpdateVendeurComponent } from './update-vendeur/update-vendeur.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { GetUserComponent } from './get-user/get-user.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UpdateComponent,
    UserComponent,
    CreateVendeurComponent,
    UpdateVendeurComponent,
    DeleteComponent,
    DetailsComponent,
    AdminUpdateComponent,
    AdminDeleteComponent,
    GetUserComponent,
    DetailsUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
