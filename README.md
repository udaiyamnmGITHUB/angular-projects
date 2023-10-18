# Customer Registration

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
- This project showcases a user-friendly interface that allows customers to navigate through different screens related to customer, product, and order information. Additionally, users can sign up by filling out a form that collects their first name, last name, and email address.

-  The signup form is built as a JSON-driven UI component, which makes it easy to extend by adding different types of input controls. Form validation is implemented using reactive forms, and appropriate error messages are displayed to users.

-  To improve performance, the project uses lazy loading to split the code into smaller chunks, reducing the initial load time. The project also includes modules for customer, product, order, and layout, making it easy to manage and maintain.

-  The signup form provides a high-quality user experience, with rich features and validation. Services are injected only at the component level, ensuring that the project is efficient and scalable."


## What can be done more if I have more time?

- unit testing is not done
- not used any tool to mockup api. but I have verfied UI paylod and can expect the response
- as a alternative , I have used localstorage to demo what will happen after customer form is submitted
