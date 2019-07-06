import { Component, OnInit, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeasonStats } from '../../seasonStats';

@Component({
  selector: 'team-grid',
  templateUrl: './team-grid.component.html',
  styleUrls: ['./team-grid.component.css']
})
export class TeamGridComponent implements OnChanges {
  @Input() teams: SeasonStats[];

  columnDefs = [
    { headerName: 'Year', field: 'year' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Standing', field: 'standing' },
    { headerName: 'Divisionwinner', field: 'divisionwinner' },
    { headerName: 'Gamesplayed', field: 'gamesplayed' },
    { headerName: 'Wins', field: 'wins' },
    { headerName: 'Losses', field: 'losses' },
    { headerName: 'Ties', field: 'ties' },
    { headerName: 'Winningpct', field: 'winningpct' },
    { headerName: 'Pointsfor', field: 'pointsfor' },
    { headerName: 'Pointsagainst', field: 'pointsagainst' },
    { headerName: 'Pfpg', field: 'pfpg' },
    { headerName: 'Papg', field: 'papg' },
    { headerName: 'Ppgdiff', field: 'ppgdiff' }
  ];

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}
