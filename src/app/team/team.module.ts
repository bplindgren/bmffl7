import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeamRoutingModule } from './team-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { Team } from '../team';
import { TeamService } from './team-service/team.service';

import { TeamsComponent } from './teams/teams.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { MatTableModule } from '@angular/material/table';
import { TableModule } from '../shared-modules/table/table.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TeamRoutingModule,
    MatTableModule,
    TableModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatSelectModule
  ],
  declarations: [TeamsComponent, TeamDetailComponent],
  providers: [TeamService]
})
export class TeamModule { }
