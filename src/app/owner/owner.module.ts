import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Owner } from '../owner';
import { OwnersComponent } from './owners/owners.component';
import { OwnerService } from './owner-service/owner.service';
import { OwnerDetailComponent } from './owner-detail/owner-detail.component';
import { OwnerDetailResolver } from './owner-detail/owner-detail.resolver';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OwnersComponent,
    OwnerDetailComponent
  ],
  providers: [OwnerService, OwnerDetailResolver],
  exports: [OwnersComponent, OwnerDetailComponent]
})
export class OwnerModule { }
