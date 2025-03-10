import { Component, inject } from '@angular/core';
import { Country } from '../../data/interfaces/country.interface';
import { CountryService } from '../../data/services/country.service';

@Component({
  selector: 'app-search-page',
  standalone: false,
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  countryService = inject(CountryService)
  countries: Country[] = []
  addNew!: Country;

  constructor() {
    this.countryService.getAllCountries()
      .subscribe(
        val => { this.countries = val; this.addNew = { name: "Добавить страну", id: (this.countries.length + 1).toString() } }
    )
  }
}
