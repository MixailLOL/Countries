import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-country',
  standalone: false,
  templateUrl: './edit-country.component.html',
  styleUrl: './edit-country.component.css'
})
export class EditCountryComponent {
  form = new FormGroup({
    name: new FormControl(null),
  })
  @Input() country!: string;
  onSubmit() {
    console.log(this.form.value)
  }
}
