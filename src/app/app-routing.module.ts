import { NgModule } from '@angular/core';
import { RouterModule, Routes, Resolve } from '@angular/router';

import { Owner } from './owner'

import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { MatchupComponent } from './matchup/matchup.component';
import { RecordsComponent } from './records/records.component';
import { OwnerModule } from './owner/owner.module';
import { OwnersComponent } from './owner/owners/owners.component';
import { OwnerDetailComponent } from './owner/owner-detail/owner-detail.component';
import { OwnerDetailResolver } from './owner/owner-detail/owner-detail.resolver';
import { WeekScoresComponent } from './week-scores/week-scores.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'scores/season/:seasonId/week/:weekId', component: WeekScoresComponent },
  { path: 'owners', component: OwnersComponent },
  { path: 'owners/:name',
    component: OwnerDetailComponent,
    resolve: { owner: OwnerDetailResolver }},
  { path: 'matchup', component: MatchupComponent },
  { path: 'records', component: RecordsComponent },
  { path: 'teams', component: TeamComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes), OwnerModule ],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule { }
