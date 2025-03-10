import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Country } from '../../data/interfaces/country.interface';
import { Router, ActivatedRoute } from '@angular/router';
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
  constructor(private router: Router, private route: ActivatedRoute) {
    this.countryService.getAllCountries()
      .subscribe(
        val => {
          this.idForNew = val.length;
          if (this.country.id == (this.idForNew + 1).toString()) {
            this.createNew = true
          }
        }
      )
  }
}
