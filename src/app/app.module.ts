import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { OwnerService } from './owner/owner-service/owner.service';
import { GameService } from './game.service';

import { TeamComponent } from './team/team.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { WeekScoresComponent } from './week-scores/week-scores.component';
import { MatchupComponent } from './matchup/matchup.component';
import { RecordsComponent } from './records/records.component';
import { WeekScoresResolver } from './week-scores/week-scores.resolver';


import { MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatCardModule, MatGridListModule, MatMenuModule } from '@angular/material';
import { WeekScoresFormComponent } from './week-scores/week-scores-form/week-scores-form.component';
import { ScoreboardComponent } from './week-scores/scoreboard/scoreboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    MenuComponent,
    HomeComponent,
    WeekScoresComponent,
    MatchupComponent,
    RecordsComponent,
    WeekScoresFormComponent,
    ScoreboardComponent
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
    MatMenuModule
  ],
  providers: [GameService, WeekScoresResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
