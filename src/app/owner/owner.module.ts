import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OwnerRoutingModule } from './owner-routing.module';

import { Owner } from '../owner';
import { OwnerService } from './owner-service/owner.service';

import { OwnersComponent } from './owners/owners.component';
import { OwnerDetailComponent } from './owner-detail/owner-detail.component';
import { OwnerCardComponent } from './owner-card/owner-card.component';
import { MatCardModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { StatCardComponent } from './stat-card/stat-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { StatCardGridListComponent } from './stat-card-grid-list/stat-card-grid-list.component';
import { TableModule } from '../shared-modules/table/table.module';

import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    OwnerRoutingModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatTableModule,
    TableModule
  ],
  declarations: [
    OwnersComponent,
    OwnerDetailComponent,
    OwnerCardComponent,
    StatCardComponent,
    StatCardGridListComponent
  ],
  providers: [OwnerService]
})
export class OwnerModule { }
