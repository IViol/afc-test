import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionsComponent } from './regions/regions.component';
import { CountryDetailsComponent } from './country-details/country-details.component';

@NgModule({
  declarations: [
    RegionsComponent,
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
