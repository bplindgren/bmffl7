import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchupComponent } from './matchup/matchup.component';

const routes: Routes = [
  {
    path: '',
    component: MatchupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchupRoutingModule { }
