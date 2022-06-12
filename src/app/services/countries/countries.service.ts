import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Country } from './countries.model'

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(
    private http: HttpClient,
  ) {}

  public getCountries(region: string) {
    return this.http.get<Country[]>(`https://restcountries.com/v2/region/${region}`)
  }
}
