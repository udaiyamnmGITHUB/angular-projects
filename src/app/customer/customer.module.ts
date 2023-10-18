import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/sign-up-component';
import { CustomerRoutingModule } from './customer-routing.module.ts';



@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
