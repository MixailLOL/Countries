import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  http = inject(HttpClient)
  baseApiUrl = "http://localhost:3000/"
  constructor() { }

  getAllCountries() {
    return this.http.get<Country[]>(this.baseApiUrl + "countries")
  }

  getCountryByName(id: number) {
    return this.http.get<Country>(this.baseApiUrl + "countries/" + id)
  }

  deletCountry(country: Country) {
    return this.http.delete<Country>(this.baseApiUrl + "countries/" + country.id)
  }

  patchCountry(country: Country) {
    return this.http.patch<Country>(
      this.baseApiUrl + "countries/" + country.id,
      country
    )
  }

  postCountry(country: Country) {
    return this.http.post<Country>(
      this.baseApiUrl + "countries/",
      country
    )
  }
}
