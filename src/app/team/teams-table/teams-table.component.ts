import { Component, Input } from '@angular/core';
import { MatSort, MatTableDataSource, Sort } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { Team } from '../../team';

@Component({
  selector: 'teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent {
  @Input() teams: Team[];
  @Input() datasource;
  displayedColumns: string[] = ['year', 'name', 'standing', 'divisionwinner', 'gamesplayed', 'wins', 'losses', 'ties', 'winningpct', 'pointsfor', 'pointsagainst', 'pfpg', 'papg', 'ppgdiff'];

  constructor() { }

}
