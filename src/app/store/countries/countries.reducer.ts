import { createReducer, on } from '@ngrx/store'

import { setCountries, selectRegion, selectCountry } from './countries.actions'
import { EUROPE, ASIA, Country } from '../../services/countries/countries.model'

export type CountriesState = {
  regions: string[],
  countries: Country[],
  selectedRegion: string | undefined,
  selectedCountry: string | undefined,
}

export const initialCountriesState: CountriesState = {
  regions: [EUROPE, ASIA],
  countries: [],
  selectedRegion: undefined,
  selectedCountry: undefined,
}

export const countriesReducer = createReducer(
  initialCountriesState,
  on(setCountries, (state, { items }): CountriesState => ({
    ...state,
    countries: items,
  })),
  on(selectRegion, (state, { value }): CountriesState => ({
    ...state,
    selectedRegion: value,
  })),
  on(selectCountry, (state, { value }): CountriesState => ({
    ...state,
    selectedCountry: value,
  })),
)