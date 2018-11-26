import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatchupRoutingModule } from './matchup-routing.module';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TableModule } from '../shared-modules/table/table.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatchupComponent } from './matchup/matchup.component';
import { MatchupFormComponent } from './matchup-form/matchup-form.component';
import { MatchupTotalsComponent } from './matchup-totals/matchup-totals.component';
import { MatchupGridListComponent } from './matchup-grid-list/matchup-grid-list.component';

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
    MatGridListModule,
    FlexLayoutModule
  ],
  declarations: [MatchupComponent, MatchupFormComponent, MatchupTotalsComponent, MatchupGridListComponent]
})
export class MatchupModule { }
