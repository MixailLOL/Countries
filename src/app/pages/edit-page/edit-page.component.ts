import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CountryService } from '../../data/services/country.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, take, takeLast } from 'rxjs';
import { Country } from '../../data/interfaces/country.interface';
import { __param } from 'tslib';

@Component({
  selector: 'app-edit-page',
  standalone: false,
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.css',
})

export class EditPageComponent {
  countryService = inject(CountryService)
  route = inject(ActivatedRoute)
  country$ = this.route.params.pipe(switchMap(({ country }) => {
    return this.countryService.getCountryByName(country)
  }))
  country = '';
  constructor() {
    this.route.params.subscribe(event => { this.country = event["name"]})
  }
}
