import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from './game-service/game.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GamesGridComponent } from './games-grid/games-grid.component';

@NgModule({
  declarations: [GamesGridComponent],
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
  providers: [GameService]
})
export class GameModule { }
