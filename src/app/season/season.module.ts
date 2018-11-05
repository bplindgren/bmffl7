import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonRoutingModule } from './season-routing.module';

import { SeasonService } from './season-service/season.service';

import { SeasonsComponent } from './seasons/seasons.component';
import { SeasonDetailComponent } from './season-detail/season-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SeasonRoutingModule
  ],
  declarations: [SeasonsComponent, SeasonDetailComponent],
  providers: [SeasonService]
})
export class SeasonModule { }
