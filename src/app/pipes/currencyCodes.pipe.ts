import { Pipe, PipeTransform } from '@angular/core'

import { Currency } from '../services/countries/countries.model'

@Pipe({name: 'currencyCodes'})
export class CurrencyCodesPipe implements PipeTransform {
  transform(items: Currency[]): string {
    return items.map(item => item.code).join(', ')
  }
}
