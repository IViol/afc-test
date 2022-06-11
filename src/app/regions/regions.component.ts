import { Component, OnInit } from '@angular/core';

const EUROPE = 'europe'
const ASIA = 'asia'

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {
  items = [EUROPE, ASIA]

  constructor() { }

  ngOnInit(): void {
  }

}
