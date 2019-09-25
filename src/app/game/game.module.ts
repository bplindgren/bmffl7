import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from './game-service/game.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
  providers: [GameService]
})
export class GameModule { }
