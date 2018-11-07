import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsTableComponent } from '../../team/teams-table/teams-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule
  ],
  declarations: [
    TeamsTableComponent
  ],
  exports: [TeamsTableComponent]
})
export class TableModule { }
