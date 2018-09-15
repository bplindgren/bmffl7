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

import { MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatCardModule, MatGridListModule, MatMenuModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    MenuComponent
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
