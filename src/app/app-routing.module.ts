import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: "user",loadChildren:()=>import("./user/user.module").then(m=> m.UserModule)},
  {path: "product", loadChildren:()=>import("./product/product.module").then(m=>m.ProductModule)},
  {path: "commande", loadChildren:()=>import("./commande/commande.module").then(m=>m.CommandeModule)},
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
