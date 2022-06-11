import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CountryNamePipe } from './pipes/countryName.pipe';
import { ComponentsModule } from './components/components.module'
import { countriesReducer } from './store/countries/countries.reducer'

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
