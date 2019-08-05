import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsTableComponent } from '../../team/teams-table/teams-table.component';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { GamesTableComponent } from '../../game/games-table/games-table.component';
import { SeasonsTableComponent } from '../../season/seasons-table/seasons-table.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { VerticalBarChartComponent } from '../../charts/vertical-bar-chart/vertical-bar-chart.component';
import { DoubleVerticalBarChartComponent } from '../../charts/double-vertical-bar-chart/double-vertical-bar-chart.component';
import { NoCommaPipe } from './no-comma.pipe';
import { NullToEmptyStrPipe } from './null-to-empty-str.pipe';
import { CdkTableModule } from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatchupTableComponent } from '../../matchup/matchup-table/matchup-table.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule,
    ChartsModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  declarations: [
    TeamsTableComponent,
    GamesTableComponent,
    SeasonsTableComponent,
    VerticalBarChartComponent,
    DoubleVerticalBarChartComponent,
    NoCommaPipe,
    NullToEmptyStrPipe,
    MatchupTableComponent
  ],
  exports: [
    TeamsTableComponent,
    GamesTableComponent,
    SeasonsTableComponent,
    VerticalBarChartComponent,
    DoubleVerticalBarChartComponent,
    NoCommaPipe,
    NullToEmptyStrPipe,
    MatchupTableComponent
  ]
})
export class TableModule { }
