import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from "./search/search.component";
import {CategoryComponent} from "./category/category.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {ModifyProductComponent} from "./modify-product/modify-product.component";
import {DeleteProductComponent} from "./delete-product/delete-product.component";
import {GetAllComponent} from "./get-all/get-all.component";
import {GetOneComponent} from "./get-one/get-one.component";
import {VendeurProductComponent} from "./vendeur-product/vendeur-product.component";
import {AdminCreateProductComponent} from "./admin-create-product/admin-create-product.component";
import {AdminDeleteProductComponent} from "./admin-delete-product/admin-delete-product.component";
import {AdminUpdateProductComponent} from "./admin-update-product/admin-update-product.component";
import {RatingComponent} from "./rating/rating.component";
import {CommentaireComponent} from "./commentaire/commentaire.component";
import {UpdateCommentaireComponent} from "./update-commentaire/update-commentaire.component";
import {DeleteCommentaireComponent} from "./delete-commentaire/delete-commentaire.component";
import {GetRecommandationComponent} from "./get-recommandation/get-recommandation.component";
import {ModoDeleteCommentComponent} from "./modo-delete-comment/modo-delete-comment.component";
import {GetCommentComponent} from "./get-comment/get-comment.component";
import {GetCommentByProductComponent} from "./get-comment-by-product/get-comment-by-product.component";

const routes: Routes = [
  {path: "", component: GetAllComponent},
  {path: "search/:search", component: SearchComponent},
  {path: "category/:id", component: CategoryComponent},
  {path: "add", component: AddProductComponent},
  {path: "modify/:id", component: ModifyProductComponent},
  {path: "delete/:id", component: DeleteProductComponent},
  {path: "vendeur/product", component: VendeurProductComponent},
  {path: "admin-create", component: AdminCreateProductComponent},
  {path: "admin-delete/:id", component: AdminDeleteProductComponent},
  {path: "admin-update/:id", component: AdminUpdateProductComponent},
  {path: "rating", component: RatingComponent},
  {path: "commentaire", component: CommentaireComponent},
  {path: "commentaire/update", component: UpdateCommentaireComponent},
  {path: "commentaire/delete/:id", component: DeleteCommentaireComponent},
  {path: "get-recommendation", component: GetRecommandationComponent},
  {path: "commentaire/modo-delete", component: ModoDeleteCommentComponent},
  {path: "get-comment", component: GetCommentComponent},
  {path: "get-comment/:id", component: GetCommentByProductComponent},
  {path: ":id", component: GetOneComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
