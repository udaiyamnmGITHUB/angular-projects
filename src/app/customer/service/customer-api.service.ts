import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer.model';
import { JsonFormData } from 'src/_shared/layout/model/json-ui.model';
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
