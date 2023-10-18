import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonFormControls, JsonFormData } from 'src/_shared/layout/model/json-ui.model';
import { Customer } from '../model/customer.model';
import { CustomerApiService } from '../service/customer-api.service';

@Component({
  selector: 'app-layout',
  templateUrl: './sign-up-component.html',
  providers: [CustomerApiService]
})
export class SignupComponent implements OnInit, OnDestroy {

  public jsonFormData!: JsonFormData;

  public userSignupForm: FormGroup = this.fb.group({});
  @ViewChild('customerFormElem') customerFormElem!: ElementRef;

  constructor(private fb: FormBuilder, private customerApiService: CustomerApiService) { }


  public ngOnInit(): void {
    this.customerApiService.getQuestionnaires()
      .subscribe({
        next: (formData: JsonFormData | any) => {
          this.createForm(formData.controls);
          this.jsonFormData = formData as JsonFormData;
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
          // should display a error component 
        }
      });
  }

  public onSubmit(): void {
    this.userSignupForm.markAsTouched();
    this.enableValidationClass();
    
  if (this.userSignupForm.valid && this.userSignupForm.touched) {
      this.customerApiService.signUp(this.userSignupForm.value)
        .subscribe({
          next: (customerDetails: Customer | any) => {
            // user can navigate to customer details by using angular router.navigate.
          },
          error: (error: HttpErrorResponse) => {
            console.log(error);
            /// user stays on the same screen provide with error messages
          }
        });
    }
  }

  private enableValidationClass(): void {
    if (this.userSignupForm.invalid) {
      const forms = this.customerFormElem.nativeElement.querySelectorAll('.needs-validation');
      Array.from(forms).forEach((form: any) => {
        form.classList.add('was-validated')
      })
    }
  }



 public ngOnDestroy(): void {
    // HttpClient unsubscribes automatically
    // as a placeholder to unsubscribes other events
  }

}