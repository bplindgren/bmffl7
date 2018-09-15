import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeekScoresComponent } from './week-scores/week-scores.component';
import { WeekScoresResolver } from './week-scores/week-scores.resolver';

const routes: Routes = [
  {
    path: ':seasonId/week/:weekId',
    component: WeekScoresComponent,
    resolve: { games: WeekScoresResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeekScoresRoutingModule { }
