import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  http = inject(HttpClient)
  baseApiUrl = "http://localhost:3000/"
  constructor() { }

  getAllCountries() {
    return this.http.get(this.baseApiUrl+"countries")
  }
}
