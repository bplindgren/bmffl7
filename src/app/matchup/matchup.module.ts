import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatchupRoutingModule } from './matchup-routing.module';
import { MatchupComponent } from './matchup/matchup.component';
import { MatchupFormComponent } from './matchup-form/matchup-form.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TableModule } from '../shared-modules/table/table.module';
import { MatchupTotalsComponent } from './matchup-totals/matchup-totals.component';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatchupRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
    TableModule,
    FlexLayoutModule
  ],
  declarations: [MatchupComponent, MatchupFormComponent, MatchupTotalsComponent]
})
export class MatchupModule { }
