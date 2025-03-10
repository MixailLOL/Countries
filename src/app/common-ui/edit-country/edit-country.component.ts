import { Component, inject, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Country } from '../../data/interfaces/country.interface';
import { CountryService } from '../../data/services/country.service';

@Component({
  selector: 'app-edit-country',
  standalone: false,
  templateUrl: './edit-country.component.html',
  styleUrl: './edit-country.component.css'
})
export class EditCountryComponent {
  countryService = inject(CountryService)
  form = new FormGroup({
    name: new FormControl(null),
  })

  @Input() country!: Country;
 


  countries: Country | undefined;
  editedCountry!: Country; 
  onSubmit() {
    this.editedCountry = { id: history.state.id, name: history.state.name } 
    console.log(this.editedCountry)
    this.countryService.patchCountr(this.editedCountry)
      .subscribe(
        val => { this.countries = val }
    )
  }


  constructor() {
    console.log(history.state)
  }
}
