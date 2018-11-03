import { Component, OnInit, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Team } from '../team';

@Component({
  selector: 'teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  @Input() teams: Team[];

  constructor() { }

  ngOnInit() {
    console.log(this.teams);
    console.log('team table created');
  }

}
