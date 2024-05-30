import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-home',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './client-home.component.html',
  styleUrl: './client-home.component.scss'
})
export class ClientHomeComponent {
  activeTab: string = 'investment';
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: ['', [
        Validators.required
      ]],
      phone: ['', [
        Validators.required
      ]]
    })
  }

  ngOnInit(): void {
    const defaultTab = document.getElementById("defaultOpen");
    if (defaultTab) {
      defaultTab.click();
    }
  }

  openCarClassTab(event: any, carClass: string) {
    console.log('carClass: ', carClass);
    this.activeTab = carClass;

    const tablinks = document.getElementsByClassName("calculator__tabs-item");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    (event.currentTarget as HTMLElement).className += " active";
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    } else {
      console.log('Пожалуйста, заполните форму корректно')
    }
  }
}
