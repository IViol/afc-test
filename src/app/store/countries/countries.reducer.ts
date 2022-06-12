import { createReducer, on } from '@ngrx/store'

import { setCountries, selectRegion, selectCountry } from './countries.actions'
import { CountriesByRegion, Region } from '../../services/countries/countries.model'

export type CountriesState = {
  regions: Region[],
  countries: CountriesByRegion,
  selectedRegion: Region | undefined,
  selectedCountry: string | undefined,
}

export const initialCountriesState: CountriesState = {
  regions: [Region.Europe, Region.Asia],
  countries: {},
  selectedRegion: undefined,
  selectedCountry: undefined,
}

export const countriesReducer = createReducer(
  initialCountriesState,
  on(setCountries, (state, { region, items }): CountriesState => ({
    ...state,
    countries: {
      ...state.countries,
      [region]: items,
    },
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
