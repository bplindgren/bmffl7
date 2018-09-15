import { NgModule } from '@angular/core';
import { RouterModule, Routes, Resolve } from '@angular/router';

import { OwnerModule } from './owner/owner.module';
import { WeekScoresMo } from './week-scores/week-scores.module';
// import { OwnersComponent } from './owner/owners/owners.component';
// import { OwnerDetailComponent } from './owner/owner-detail/owner-detail.component';
// import { OwnerDetailResolver } from './owner/owner-detail/owner-detail.resolver';

import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { MatchupComponent } from './matchup/matchup.component';
import { RecordsComponent } from './records/records.component';
// import { WeekScoresComponent } from './week-scores/week-scores.component';
// import { WeekScoresResolver } from './week-scores/week-scores.resolver';
// import { ScorecardComponent } from './week-scores/scorecard/scorecard.component';
// import { ScorecardResolver } from './week-scores/scorecard/scorecard.resolver';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'scores/season',
    loadChildren: './week-scores/week-scores.module#WeekScoresModule'
  },
  // { path: 'scores/season/:seasonId/week/:weekId',
  //   component: WeekScoresComponent,
  //   resolve: { games: WeekScoresResolver }
  // },
  { path: 'owners',
    loadChildren: './owner/owner.module#OwnerModule'
  },
  // { path: 'owners/:name',
  //   component: OwnerDetailComponent,
  //   resolve: { owner: OwnerDetailResolver }},
  { path: 'matchup', component: MatchupComponent },
  { path: 'records', component: RecordsComponent },
  { path: 'teams', component: TeamComponent }
]

@NgModule({
  declarations: [ HomeComponent, MatchupComponent, RecordsComponent ],
  imports: [ OwnerModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule { }
