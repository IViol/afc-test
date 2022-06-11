import { Pipe, PipeTransform } from '@angular/core';

import { Country } from '../services/countries/countries.model';

@Pipe({name: 'countryName'})
export class CountryNamePipe implements PipeTransform {
  transform (items: Country[]): any {
      return items.map(item => item.name);
  }
}
