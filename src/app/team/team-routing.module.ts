import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Team } from '../team';
import { TeamService } from './team-service/team.service';

import { TeamsComponent } from './teams/teams.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TeamsComponent
  },
  {
    path: ':id',
    component: TeamDetailComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
