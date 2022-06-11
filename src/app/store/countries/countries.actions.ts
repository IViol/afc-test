import { createAction, props } from '@ngrx/store'

import { Country } from '../../services/countries/countries.model'

export type SetCountriesActionProps = { items: Country[] }

export const setCountries = createAction(
  '[Countries] Set Countries',
  props<SetCountriesActionProps>(),
)

export const selectRegion = createAction(
  '[Countries] Select Region',
  props<{ value: string }>(),
)

export const selectCountry = createAction(
  '[Countries] Select Country',
  props<{ value: string }>(),
)
