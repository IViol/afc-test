import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { RegionNamePipe } from './pipes/regionName.pipe'
import { CountryNamePipe } from './pipes/countryName.pipe'
import { ComponentsModule } from './components/components.module'
import { CountriesEffects} from './store/countries/countries-effects'
import { countriesReducer } from './store/countries/countries.reducer'

@NgModule({
  declarations: [
    AppComponent,
    RegionNamePipe,
    CountryNamePipe,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ countriesState: countriesReducer }, {}),
    EffectsModule.forRoot([CountriesEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
