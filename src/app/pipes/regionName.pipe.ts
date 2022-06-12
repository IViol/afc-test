import { Pipe, PipeTransform } from '@angular/core';

import { Region } from '../services/countries/countries.model';

@Pipe({name: 'regionName'})
export class RegionNamePipe implements PipeTransform {
  transform (items: Region[] | null): any {
      return (items || []).map(item => Region[item]);
  }
}
