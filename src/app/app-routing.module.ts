import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
  
  
  { path: '', redirectTo: '/main', pathMatch: 'full' },
{path:'main',component:MainscreenComponent},
{path:'orders',component:OrdersComponent},
{path:'product',component:ProductsComponent},
{path:'customers',component:CustomersComponent},
{path:'category',component:CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
