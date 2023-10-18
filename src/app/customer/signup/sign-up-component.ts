import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonFormControls, JsonFormData } from 'src/_shared/layout/model/json-ui.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-layout',
  templateUrl: './sign-up-component.html'
})
export class SignupComponent implements OnInit {

  public jsonFormData!: JsonFormData;

  public userSignupForm: FormGroup = this.fb.group({});
  @ViewChild('customerFormElem') customerFormElem!: ElementRef;

  constructor(private fb: FormBuilder, private http: HttpClient) { }


  ngOnInit() {
    this.http
      .get('../../../assets/customer-form.json')
      .subscribe({
        next: (formData: JsonFormData | any) => {
          this.createForm(formData.controls);
          this.jsonFormData = formData as JsonFormData;
        },
        error: () => {

        }
      });
  }

  createForm(controls: JsonFormControls[]) {
    for (const control of controls) {
      const validatorsToAdd = [];

      for (const [key, value] of Object.entries(control.validators)) {
        switch (key) {
          case 'min':
            validatorsToAdd.push(Validators.min(value));
            break;
          case 'max':
            validatorsToAdd.push(Validators.max(value));
            break;
          case 'required':
            if (value) {
              validatorsToAdd.push(Validators.required);
            }
            break;
          case 'requiredTrue':
            if (value) {
              validatorsToAdd.push(Validators.requiredTrue);
            }
            break;
          case 'email':
            if (value) {
              validatorsToAdd.push(Validators.email);
            }
            break;
          case 'minLength':
            validatorsToAdd.push(Validators.minLength(value));
            break;
          case 'maxLength':
            validatorsToAdd.push(Validators.maxLength(value));
            break;

          case 'nullValidator':
            if (value) {
              validatorsToAdd.push(Validators.nullValidator);
            }
            break;
          default:
            break;
        }
      }

      this.userSignupForm.addControl(
        control.name,
        this.fb.control(control.value, validatorsToAdd)
      );
    }
  }

  onSubmit() {
    this.userSignupForm.markAsTouched();
    this.enableValidationClass();
    console.log('Form valid: ', this.userSignupForm);
    console.log('Form valid: ', this.userSignupForm.valid);
    console.log('Form values: ', this.userSignupForm.value);
  }

  enableValidationClass() {
    if (this.userSignupForm.invalid) {
      const forms = this.customerFormElem.nativeElement.querySelectorAll('.needs-validation');
      Array.from(forms).forEach((form: any) => {
        form.classList.add('was-validated')
      })
    }
  }

}