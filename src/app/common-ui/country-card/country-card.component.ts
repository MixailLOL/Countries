import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Country } from '../../data/interfaces/country.interface';
import { CountryService } from '../../data/services/country.service';

@Component({
  selector: 'app-country-card',
  standalone: false,
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.css'
})
export class CountryCardComponent {
  @Input() country!: Country;
  countryService = inject(CountryService)
  idForNew = 0;
  createNew = false;

  ngOnInit() {
    if (this.country.id == "new") {
      this.createNew = true
    }
  }
}
