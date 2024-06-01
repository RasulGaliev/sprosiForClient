import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-client-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './client-registration.component.html',
  styleUrl: './client-registration.component.scss'
})
export class ClientRegistrationComponent {
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      email: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]],
      confirmedPassword: ['', [
        Validators.required
      ]]
    })
  }


  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    } else {
      console.log('Пожалуйста, заполните форму корректно')
    }
  }
}
