import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-edit-page',
  standalone: false,
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.css',
})
export class EditPageComponent {

  form = new FormGroup({
    name: new FormControl(null),
  })

  onSubmit() {
    console.log(this.form.value)
  }
}
