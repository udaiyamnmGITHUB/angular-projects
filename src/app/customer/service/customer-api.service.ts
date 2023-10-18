import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonFormData } from 'src/_shared/layout/model/json-ui.model';
import { Customer } from '../model/customer.model';
@Injectable()

export class CustomerApiService {
  constructor(private httpClient: HttpClient) {}

  public signUp(customer: Customer): Observable<Customer>{
    return this.httpClient.post<Customer>('http://abcpvtltd.com/customer/new', customer);
  }

  public getQuestionnaires(): Observable<JsonFormData>{
    return this.httpClient
    .get<JsonFormData>('../../../assets/customer-form.json');
  }
}
