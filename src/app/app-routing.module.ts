import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {ProductDeleteComponent} from './product/product-delete/product-delete.component';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {CategoryCreateComponent} from './category/category-create/category-create.component';
import {CategoryEditComponent} from './category/category-edit/category-edit.component';
import {CategoryDeleteComponent} from './category/category-delete/category-delete.component';
import {CityListComponent} from './city/city-list/city-list.component';
import {CityCreateComponent} from './city/city-create/city-create.component';
import {CityEditComponent} from './city/city-edit/city-edit.component';
import {CityDeleteComponent} from './city/city-delete/city-delete.component';
import {CssInlineRuleAst} from "codelyzer/angular/styles/cssAst";
import {CityDetailComponent} from "./city/city-detail/city-detail.component";


const routes: Routes = [{
  path: 'product/list',
  component: ProductListComponent
}, {
  path: 'product/create',
  component: ProductCreateComponent
}, {
  path: 'product/edit/:id',
  component: ProductEditComponent
}, {
  path: 'product/delete/:id',
  component: ProductDeleteComponent
},
  {
    path: 'categories/list',
    component: CategoryListComponent
  }, {
    path: 'categories/create',
    component: CategoryCreateComponent
  }, {
    path: 'categories/edit/:id',
    component: CategoryEditComponent
  }, {
    path: 'categories/delete/:id',
    component: CategoryDeleteComponent
  }, {
    path: 'cities/list',
    component: CityListComponent
  }, {
    path: 'cities/create',
    component: CityCreateComponent
  }, {
    path: 'cities/edit/:id',
    component: CityEditComponent
  }, {
    path: 'cities/delete/:id',
    component: CityDeleteComponent
  }, {
    path: 'cities/detail/:id',
    component: CityDetailComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
