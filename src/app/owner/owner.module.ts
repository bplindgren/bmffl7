import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerRoutingModule } from './owner-routing.module';

import { Owner } from '../owner';
import { OwnerService } from './owner-service/owner.service';

import { OwnersComponent } from './owners/owners.component';
import { OwnerDetailComponent } from './owner-detail/owner-detail.component';
import { OwnerDetailResolver } from './owner-detail/owner-detail.resolver';
import { OwnerCardComponent } from './owner-card/owner-card.component';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    OwnerRoutingModule,
    FlexLayoutModule,
    MatCardModule
  ],
  declarations: [
    OwnersComponent,
    OwnerDetailComponent,
    OwnerCardComponent
  ],
  providers: [OwnerService, OwnerDetailResolver]
})
export class OwnerModule { }
