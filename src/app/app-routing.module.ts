import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChiliListComponent } from './pages/chili-list/chili-list.component';
import { AddChiliComponent } from './pages/add-chili/add-chili.component';
import { DescriptComponent } from './pages/descript/descript.component';
import { LoginComponent } from './pages/login/login.component';
import { ShopChiliComponent } from './shop/shop-chili/shop-chili.component';
import { ShopSauceComponent } from './shop/shop-sauce/shop-sauce.component';
import { ShoppingCartComponent } from './shop/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path : '', redirectTo: 'list', pathMatch: 'full'},
  {path : 'list', component : ChiliListComponent},
  {path : 'add', component : AddChiliComponent},
  {path : 'login', component : LoginComponent},
  {path : 'descript/:id', component : DescriptComponent},
  {path : 'chilishop', component : ShopChiliComponent},
  {path : 'sauceshop', component : ShopSauceComponent},
  {path : 'cart', component : ShoppingCartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
