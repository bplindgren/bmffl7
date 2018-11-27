import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from './game-service/game.service';
// import { HttpClientModule } from '@angular/common/http/testing';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [GameService]
})
export class GameModule { }
