import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { HeaderComponent } from './header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbModule
  ]
})
export class LayoutModule { }
