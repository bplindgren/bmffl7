import { Component, OnInit, Input } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { Team } from '../team';

@Component({
  selector: 'teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  @Input() teams: Team[];
  @Input() datasource;
  displayedColumns: string[] = ['year', 'name', 'standing', 'divisionwinner', 'gamesplayed', 'wins', 'losses', 'ties', 'winningpct', 'pointsfor', 'pointsagainst', 'pfpg', 'papg', 'ppgdiff'];

  constructor() { }

  ngOnInit() {
    console.log('team table created');
  }

}
