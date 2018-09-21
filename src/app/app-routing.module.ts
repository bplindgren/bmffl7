import { NgModule } from '@angular/core';
import { RouterModule, Routes, Resolve } from '@angular/router';

import { OwnerModule } from './owner/owner.module';
import { WeekScoresModule } from './week-scores/week-scores.module';

import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { MatchupComponent } from './matchup/matchup.component';
import { RecordsComponent } from './records/records.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'scores',
    loadChildren: './week-scores/week-scores.module#WeekScoresModule'
  },
  {
    path: 'owners',
    loadChildren: './owner/owner.module#OwnerModule'
  },
  { path: 'teams', component: TeamComponent },
  { path: 'matchup', component: MatchupComponent },
  { path: 'records', component: RecordsComponent }
]

@NgModule({
  declarations: [ HomeComponent, MatchupComponent, RecordsComponent ],
  imports: [ OwnerModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule { }
