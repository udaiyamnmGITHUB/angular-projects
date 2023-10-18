# CustomerRegistration

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## The thoughts behind the implementation

This project demonstrates a customer can navigate around customer, product and order screens. and also user can submit sign-up form that allows customers enter their first name, last name and
email addres

- This signup UI component is built as a  JSON driven UI component
- UI questionnaires can be simply extended by adding diff type input control
- UI form validation is by using reactive form and appropriate error message is displayed
- customer, product, order and layout modules are created 
- lazy loading is applied to do code splitting - this would reduce initial load & improve the performance
- created a high rich user UX signup form, with validation
- injected services only at the component level 



## What can be done more if I have more time?

- unit testing is not done
- not used any tool to mockup api. but I have verfied UI paylod and can expect the response
- as a alternative , I have used localstorage to demo what will happen after customer form is submitted
