import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ModifyProductComponent } from './modify-product/modify-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { VendeurProductComponent } from './vendeur-product/vendeur-product.component';
import { AdminCreateProductComponent } from './admin-create-product/admin-create-product.component';
import { AdminDeleteProductComponent } from './admin-delete-product/admin-delete-product.component';
import { AdminUpdateProductComponent } from './admin-update-product/admin-update-product.component';
import { RatingComponent } from './rating/rating.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { UpdateCommentaireComponent } from './update-commentaire/update-commentaire.component';
import { DeleteCommentaireComponent } from './delete-commentaire/delete-commentaire.component';
import { GetRecommandationComponent } from './get-recommandation/get-recommandation.component';
import { ModoDeleteCommentComponent } from './modo-delete-comment/modo-delete-comment.component';
import { GetCommentComponent } from './get-comment/get-comment.component';
import { GetCommentByProductComponent } from './get-comment-by-product/get-comment-by-product.component';
import { GetAllComponent } from './get-all/get-all.component';
import { GetOneComponent } from './get-one/get-one.component';


@NgModule({
  declarations: [
    SearchComponent,
    CategoryComponent,
    AddProductComponent,
    ModifyProductComponent,
    DeleteProductComponent,
    VendeurProductComponent,
    AdminCreateProductComponent,
    AdminDeleteProductComponent,
    AdminUpdateProductComponent,
    RatingComponent,
    CommentaireComponent,
    UpdateCommentaireComponent,
    DeleteCommentaireComponent,
    GetRecommandationComponent,
    ModoDeleteCommentComponent,
    GetCommentComponent,
    GetCommentByProductComponent,
    GetAllComponent,
    GetOneComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
