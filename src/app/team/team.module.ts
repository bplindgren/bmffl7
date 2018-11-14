import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeamRoutingModule } from './team-routing.module';

import { Team } from '../team';
import { TeamService } from './team-service/team.service';

import { TeamsComponent } from './teams/teams.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TeamRoutingModule
  ],
  declarations: [TeamsComponent, TeamDetailComponent],
  providers: [TeamService]
})
export class TeamModule { }
