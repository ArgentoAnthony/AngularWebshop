import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetAllComponent} from "../product/get-all/get-all.component";
import {RecupCommandeComponent} from "./recup-commande/recup-commande.component";
import {BuyCommandComponent} from "./buy-command/buy-command.component";
import {GetCommandeByNumberComponent} from "./get-commande-by-number/get-commande-by-number.component";
import {DeleteCommandeComponent} from "./delete-commande/delete-commande.component";

const routes: Routes = [
  {path: "admin/getall", component: GetAllComponent},
  {path: "recupcommand", component: RecupCommandeComponent},
  {path: "buycommand", component: BuyCommandComponent},
  {path: ":id", component: GetCommandeByNumberComponent},
  {path: "delete/:id", component: DeleteCommandeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
