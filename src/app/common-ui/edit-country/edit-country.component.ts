import { Component, inject, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    name: new FormControl(null, Validators.required),
  })
  idForNew = "";
  @Input() country!: Country;
  createNew = false;
  countries: Country | undefined;
  editedCountry!: Country; 
  onSubmit() {
    if (this.form.valid) {
      if (this.createNew) {
        this.editedCountry = { id: this.idForNew, name: this.country.name }
        console.log("new ",this.editedCountry)
        this.countryService.postCountry(this.editedCountry)
          .subscribe(
            val => { this.countries = val }
          )
      } else {
        this.editedCountry = { id: history.state.id, name: this.country.name }
        console.log("not new ",this.editedCountry)
        this.countryService.patchCountry(this.editedCountry)
          .subscribe(
            val => { this.countries = val }
          )
      }
      this.router.navigate([`/`]);
    }
  }

  deletCountry() {
    if (confirm("Вы действительно хотите удалить эту запись?")) {
      this.editedCountry = { id: history.state.id, name: this.country.name }
      this.countryService.deletCountry(this.editedCountry)
        .subscribe(
          val => { this.countries = val; this.router.navigate([`/`]); }
      )
    }
  }

  cancel() {
    this.router.navigate([`/`]);
  }
  constructor(private router: Router, private route: ActivatedRoute) {
    if (history.state['id'] == "new") {
      this.createNew = true;
    }
    console.log(history.state, this.createNew)
    this.countryService.getAllCountries()
    .subscribe(
      val => {
        this.idForNew = (val.length + 1).toString();
        if (this.createNew) {
          this.country.name = "";
        }
      }
    )
  }
}
