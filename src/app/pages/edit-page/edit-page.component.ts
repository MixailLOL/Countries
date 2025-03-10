import { Component, inject, Input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CountryService } from '../../data/services/country.service';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap, take, takeLast } from 'rxjs';
import { Country } from '../../data/interfaces/country.interface';
import { __param } from 'tslib';

@Component({
  selector: 'app-edit-page',
  standalone: false,
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.css',
})

export class EditPageComponent {
  state$: Observable<object> | undefined;
  countryService = inject(CountryService)
  route = inject(ActivatedRoute)
  country$ = this.route.params.pipe(switchMap(({ country }) => {
    return this.countryService.getCountryByName(country)
  }))
  countryCard!: Country;
  ngOnInit() {
    this.countryCard = history.state;
    console.log(this.countryCard)
  }
}
