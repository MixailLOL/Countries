import { Component, inject, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Country } from '../../data/interfaces/country.interface';
import { CountryService } from '../../data/services/country.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

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
  idForNew = 0;
  @Input() country!: Country;
  createNew = false;
  countries: Country | undefined;
  editedCountry!: Country; 
  onSubmit() {
    if (this.createNew) {
      this.editedCountry = { id: history.state.id, name: history.state.name }
      console.log("new ",this.editedCountry)
      this.countryService.postCountry(this.editedCountry)
        .subscribe(
          val => { this.countries = val }
        )
    } else {
      this.editedCountry = { id: history.state.id, name: history.state.name }
      console.log("not new ",this.editedCountry)
      this.countryService.patchCountry(this.editedCountry)
        .subscribe(
          val => { this.countries = val }
        )
    }
    this.router.navigate([`/`]);
  }

  deletCountry() {
    this.editedCountry = { id: history.state.id, name: history.state.name }
    this.countryService.deletCountry(this.editedCountry)
      .subscribe(
        val => { this.countries = val }
    )
    this.router.navigate([`/`]);
  }

  cancel() {
    this.router.navigate([`/`]);
  }
  constructor(private router: Router, private route: ActivatedRoute) {
    this.countryService.getAllCountries()
      .subscribe(
        val => {
          this.idForNew = val.length;
          if (history.state['id'] == this.idForNew + 1) {
            this.createNew = true
          }
        }
    )
  }
}
