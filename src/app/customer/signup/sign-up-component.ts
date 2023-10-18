import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './sign-up-component.html'
})
export class SignupComponent implements OnInit{


  ngOnInit(): void {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
     
        event.preventDefault()
        event.stopPropagation()
     

      form.classList.add('was-validated')
    }, false)
  })
})()

  }

}
