import { createAction, props } from '@ngrx/store'

import { Country, Region } from '../../services/countries/countries.model'

export const setCountriesType = '[Countries] Set Countries'
export const selectRegionType = '[Countries] Select Region'
export const selectCountryType = '[Countries] Select Country'

export const setCountries = createAction(setCountriesType, props<{ region: Region, items: Country[] }>())
export const selectRegion = createAction(selectRegionType, props<{ value: Region }>())
export const selectCountry = createAction(selectCountryType, props<{ value: string }>())
