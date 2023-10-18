import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../_shared/layout/layout.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../_shared/layout/layout.module').then((mod) => mod.LayoutModule),
  },
  { path: '**', redirectTo: 'home/customer/signup', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes), LayoutModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

