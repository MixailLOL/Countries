import { Component, inject } from '@angular/core';
import { CountryService } from './data/services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Countries';
  countryService = inject(CountryService)
  countries: any = []

  constructor() {
    this.countryService.getAllCountries()
      .subscribe(
        val => { this.countries = val }
      )
  }
}
