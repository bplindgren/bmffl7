import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WeekScoresRoutingModule } from './week-scores-routing.module';
import { WeekScoresComponent } from './week-scores/week-scores.component';
import { WeekScoresFormComponent } from './week-scores-form/week-scores-form.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    FlexLayoutModule,
    WeekScoresRoutingModule,
    RouterModule
  ],
  declarations: [
    WeekScoresComponent,
    WeekScoresFormComponent,
    ScoreboardComponent,
    ScorecardComponent
  ],
  exports: [
    WeekScoresComponent,
    WeekScoresFormComponent,
    ScoreboardComponent,
    ScorecardComponent
  ]
})
export class WeekScoresModule { }
