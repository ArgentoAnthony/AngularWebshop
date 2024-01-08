import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { AdminGetAllComponent } from './admin-get-all/admin-get-all.component';
import { RecupCommandeComponent } from './recup-commande/recup-commande.component';
import { BuyCommandComponent } from './buy-command/buy-command.component';
import { GetCommandeByNumberComponent } from './get-commande-by-number/get-commande-by-number.component';
import { DeleteCommandeComponent } from './delete-commande/delete-commande.component';


@NgModule({
  declarations: [
    AdminGetAllComponent,
    RecupCommandeComponent,
    BuyCommandComponent,
    GetCommandeByNumberComponent,
    DeleteCommandeComponent
  ],
  imports: [
    CommonModule,
    CommandeRoutingModule
  ]
})
export class CommandeModule { }
