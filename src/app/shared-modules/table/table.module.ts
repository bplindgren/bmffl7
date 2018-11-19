import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsTableComponent } from '../../team/teams-table/teams-table.component';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { GamesTableComponent } from '../../game/games-table/games-table.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule
  ],
  declarations: [
    TeamsTableComponent,
    GamesTableComponent
  ],
  exports: [TeamsTableComponent, GamesTableComponent]
})
export class TableModule { }
