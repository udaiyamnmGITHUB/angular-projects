import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      {
        path: 'customer',
        loadChildren: () => import('../../app/customer/customer.module').then((mod) => mod.CustomerModule),
      },
      {
        path: 'product',
        loadChildren: () => import('../../app/product/product.module').then((mod) => mod.ProductModule),
      },
      {
        path: 'order',
        loadChildren: () => import('../../app/order/order.module').then((mod) => mod.OrderModule),
      }

    ]
  },
  { path: '', redirectTo: '/home/customer', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }