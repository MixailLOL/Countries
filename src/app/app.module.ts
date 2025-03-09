import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryCardComponent } from './common-ui/country-card/country-card.component';
import { provideHttpClient } from '@angular/common/http';
import { EditCountryComponent } from './common-ui/edit-country/edit-country.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CountryCardComponent,
    EditCountryComponent,
    SearchPageComponent,
    EditPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
