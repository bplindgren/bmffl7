import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.css']
})
export class StatCardComponent {
  @Input() stat: String;
  @Input() value: Any;

  constructor() { }

}
