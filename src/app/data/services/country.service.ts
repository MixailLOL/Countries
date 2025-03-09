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

  getCountryByName(name: string) {
    return this.http.get<Country[]>(this.baseApiUrl + "countries/" + name)
  }
}
