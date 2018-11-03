import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WeekScoresComponent } from './week-scores/week-scores.component';
import { WeekScoresFormComponent } from './week-scores-form/week-scores-form.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { WeekScoresRoutingModule } from './week-scores-routing.module';

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
    WeekScoresRoutingModule
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class WeekScoresModule { }
