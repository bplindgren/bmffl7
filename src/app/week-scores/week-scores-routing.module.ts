import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeekScoresComponent } from './week-scores/week-scores.component';

const routes: Routes = [
  {
    path: '',
    component: WeekScoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeekScoresRoutingModule { }
