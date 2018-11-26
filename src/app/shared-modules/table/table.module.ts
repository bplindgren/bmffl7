import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsTableComponent } from '../../team/teams-table/teams-table.component';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { GamesTableComponent } from '../../game/games-table/games-table.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { VerticalBarChartComponent } from '../../charts/vertical-bar-chart/vertical-bar-chart.component';
import { DoubleVerticalBarChartComponent } from '../../charts/double-vertical-bar-chart/double-vertical-bar-chart.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule,
    ChartsModule
  ],
  declarations: [
    TeamsTableComponent,
    GamesTableComponent,
    VerticalBarChartComponent,
    DoubleVerticalBarChartComponent
  ],
  exports: [
    TeamsTableComponent,
    GamesTableComponent,
    VerticalBarChartComponent,
    DoubleVerticalBarChartComponent
  ]
})
export class TableModule { }
