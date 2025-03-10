import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from '../../data/interfaces/country.interface';

@Component({
  selector: 'app-country-card',
  standalone: false,
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.css'
})
export class CountryCardComponent {
  @Input() country!: Country;
}
