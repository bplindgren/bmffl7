import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OwnerModule } from './owner/owner.module'

import { GameService } from './game.service';
import { TeamService } from './team/team-service/team.service';

import { TeamComponent } from './team/team.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MenuComponent } from './menu/menu.component';
// import { WeekScoresComponent } from './week-scores/week-scores.component';
// import { WeekScoresResolver } from './week-scores/week-scores.resolver';
// import { ScorecardResolver } from './week-scores/scorecard/scorecard.resolver';


import { MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatCardModule, MatGridListModule, MatMenuModule } from '@angular/material';
// import { WeekScoresFormComponent } from './week-scores/week-scores-form/week-scores-form.component';
// import { ScoreboardComponent } from './week-scores/scoreboard/scoreboard.component';
// import { ScorecardComponent } from './week-scores/scorecard/scorecard.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    MenuComponent
    // WeekScoresComponent,
    // WeekScoresFormComponent,
    // ScoreboardComponent,
    // ScorecardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    OwnerModule
  ],
  providers: [GameService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
