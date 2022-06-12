import { Component, Input, OnInit } from '@angular/core'

import { Country } from '../../services/countries/countries.model'

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  @Input() country!: Country

  constructor() {}

  ngOnInit(): void {}
}
