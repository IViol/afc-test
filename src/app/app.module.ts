import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'

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
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    StoreModule.forRoot({ countriesState: countriesReducer }, {}),
    EffectsModule.forRoot([CountriesEffects]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
