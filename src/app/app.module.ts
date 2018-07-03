import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { OwnerService } from './owner/owner-service/owner.service';

import { GameService } from './game.service';
import { AppRoutingModule } from './app-routing.module';
import { TeamComponent } from './team/team.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { WeekScoresComponent } from './week-scores/week-scores.component';
import { MatchupComponent } from './matchup/matchup.component';
import { RecordsComponent } from './records/records.component';


import { MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatCardModule, MatGridListModule, MatMenuModule } from '@angular/material';
import { WeekScoresFormComponent } from './week-scores/week-scores-form/week-scores-form.component';
import { FormDemoComponent } from './week-scores/form-demo/form-demo.component';
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
    FormDemoComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
