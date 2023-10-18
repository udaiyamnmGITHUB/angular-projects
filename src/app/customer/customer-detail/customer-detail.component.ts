import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer.model';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html'
})
export class CustomerDetailComponent implements OnInit{

  public customer: Customer = JSON.parse(localStorage.getItem('customerData') as string) as Customer;

  public ngOnInit(): void {
    console.log(this.customer)   
  }

 
}
