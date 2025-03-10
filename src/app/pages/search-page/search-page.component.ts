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
  addNew: Country = { name: "Добавить страну", id: "new" };
  constructor() {
    this.countryService.getAllCountries()
      .subscribe(
        val => { this.countries = val}
      )
  }
}
