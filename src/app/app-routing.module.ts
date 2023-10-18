import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from './layout/layout.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then((mod) => mod.LayoutModule),
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes), LayoutModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

