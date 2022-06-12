import { EMPTY } from 'rxjs'
import { Store } from '@ngrx/store'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { map, mergeMap, catchError, withLatestFrom } from 'rxjs/operators'

import { StoreState } from '../store'
import { Region } from '../../services/countries/countries.model'
import { selectRegionType, setCountries } from './countries.actions'
import { CountriesService } from '../../services/countries/countries.service'

@Injectable()
export class CountriesEffects {
  loadCountries$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(selectRegionType),
      withLatestFrom(this.store.select(state => state.countriesState.countries)),
      mergeMap(([regionPayload, countries]) => {
        const region = (regionPayload as { type: string, value: Region }).value
        const isLoaded = !!countries[region]

        if (!!isLoaded) {
          return EMPTY
        }

        return this.countriesService.getCountries(region).pipe(
          map(items => setCountries({ region, items })),
          catchError(() => EMPTY)
        )
      })
    )
  })

  constructor(
    private actions$: Actions,
    private store: Store<StoreState>,
    private countriesService: CountriesService,
  ) {}
}
