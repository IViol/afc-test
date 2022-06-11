import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
})
export class RegionsComponent implements OnInit {
  @Input() name: string = ''
  @Input() items: string[] = []
  @Output() selectItem = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}
}
