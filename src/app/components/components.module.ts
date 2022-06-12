import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RegionsComponent } from './regions/regions.component'
import { CurrencyCodesPipe } from '../pipes/currencyCodes.pipe'
import { CountryDetailsComponent } from './country-details/country-details.component'

@NgModule({
  declarations: [
    RegionsComponent,
    CurrencyCodesPipe,
    CountryDetailsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RegionsComponent,
    CountryDetailsComponent,
  ],
})

export class ComponentsModule {}
