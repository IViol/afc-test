import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { Component, OnInit } from '@angular/core'

import { StoreState } from './store/store'
import { selectCountry, selectRegion } from './store/countries/countries.actions'
import { CountriesByRegion, Country, Region } from './services/countries/countries.model'

type SelectEventTarget = EventTarget & { value?: string }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  countriesForRegion: Country[] = []
  countryDetails: Country | undefined
  regions$: Observable<Region[]> = this.store.select(state => state.countriesState.regions)
  countries$: Observable<CountriesByRegion> = this.store.select(state => state.countriesState.countries)
  selectedRegion$: Observable<Region | undefined> = this.store.select(state => state.countriesState.selectedRegion)
  selectedCountry$: Observable<string | undefined> = this.store.select(state => state.countriesState.selectedCountry)

  constructor(
    private store: Store<StoreState>,
  ) {}

  ngOnInit() {
    this.selectedRegion$.subscribe(region => this.countries$.subscribe(countries => {
      this.setCountryDetails(region, countries)
    }))

    this.selectedCountry$.subscribe(country => {
      this.countryDetails = this.countriesForRegion.find(({ name }) => name === country)
    })
  }

  setCountryDetails(region: Region | undefined, countries: CountriesByRegion) {
    if (region) {
      const found = countries[Region[region]]

      if (found) {
        this.countriesForRegion = found
      }
    }
  }

  onRegionSelect({ value }: SelectEventTarget) {
    this.countryDetails = undefined
    this.countriesForRegion = []

    if (value) {
      this.store.dispatch(selectRegion({ value: value as Region }))
    }
  }

  onCountrySelect({ value }: SelectEventTarget) {
    if (value) {
      this.store.dispatch(selectCountry({ value }))
    }
  }
}
