import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatchupComponent } from './matchup/matchup.component';
import { MatchupRoutingModule } from './matchup-routing.module';
import { MatchupFormComponent } from './matchup-form/matchup-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TableModule } from '../shared-modules/table/table.module';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatchupRoutingModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonToggleModule,
    TableModule,
    FlexLayoutModule
  ],
  declarations: [MatchupComponent, MatchupFormComponent]
})
export class MatchupModule { }
