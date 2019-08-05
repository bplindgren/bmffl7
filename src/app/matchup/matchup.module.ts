import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatchupRoutingModule } from './matchup-routing.module';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { TableModule } from '../shared-modules/table/table.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatchupComponent } from './matchup/matchup.component';
import { MatchupFormComponent } from './matchup-form/matchup-form.component';
import { MatchupTotalsComponent } from './matchup-totals/matchup-totals.component';

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
    MatTableModule,
    TableModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  declarations: [MatchupComponent, MatchupFormComponent, MatchupTotalsComponent]
})
export class MatchupModule { }
