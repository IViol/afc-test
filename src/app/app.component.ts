import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { Component, OnInit } from '@angular/core'

import { StoreState } from './store/store'
import { CountriesState } from './store/countries/countries.reducer'
import { CountriesService } from './services/countries/countries.service'
import { EUROPE, ASIA, Country } from './services/countries/countries.model'
import { selectRegion } from './store/countries/countries.actions'

type SelectEventTarget = EventTarget & { value?: string }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  countries: Country[] = []
  regions = [EUROPE, ASIA]
  selectedRegion: string | void = undefined
  selectedCountry: string | void = undefined
  countries$: Observable<CountriesState>

  constructor(
    private countriesService: CountriesService,
    private store: Store<StoreState>,
  ) {
    this.countries$ = this.store.select('countriesState')
  }

  ngOnInit() {
    const countriesObservable = this.countriesService.getCountries(EUROPE.toLowerCase())

    countriesObservable.subscribe(countriesData => {
      this.countries = countriesData
    })
  }

  onRegionSelect({ value }: SelectEventTarget) {
    if (!value) {
      return
    }

    this.selectedRegion = value
    console.log("onRegionSelect", value)
    this.store.dispatch(selectRegion({ value }))
  }

  onCountrySelect({ value }: SelectEventTarget) {
    this.selectedCountry = value
    console.log("onCountrySelect", value)
  }
}
