import { Store } from '@ngrx/store'
import { map, Observable } from 'rxjs'
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
  regions$: Observable<Region[]> = this.store.select(state => state.countriesState.regions)
  countries$: Observable<CountriesByRegion> = this.store.select(state => state.countriesState.countries)
  selectedRegion$: Observable<Region | undefined> = this.store.select(state => state.countriesState.selectedRegion)
  selectedCountry$: Observable<string | undefined> = this.store.select(state => state.countriesState.selectedCountry)

  constructor(
    private store: Store<StoreState>,
  ) {}

  ngOnInit() {
    this.selectedRegion$.subscribe(region => this.countries$.subscribe(data => {
      if (region) {
        const found = data[Region[region]]

        if (found) {
          this.countriesForRegion = found
        }
      }
    }))
  }

  onRegionSelect({ value }: SelectEventTarget) {
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
