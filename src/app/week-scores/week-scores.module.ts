import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WeekScoresRoutingModule } from './week-scores-routing.module';

import { WeekScoresComponent } from './week-scores/week-scores.component';
import { WeekScoresResolver } from './week-scores/week-scores.resolver';
import { ScorecardResolver } from './scorecard/scorecard.resolver';
import { WeekScoresFormComponent } from './week-scores-form/week-scores-form.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { ScorecardComponent } from './scorecard/scorecard.component';

import { MatCardModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule }   from '@angular/forms';

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
    FormsModule
  ],
  declarations: [
    WeekScoresComponent,
    WeekScoresFormComponent,
    ScoreboardComponent,
    ScorecardComponent
  ],
  providers: [
    WeekScoresResolver,
    ScorecardResolver
  ]
})
export class WeekScoresModule { }
