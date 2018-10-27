import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Owner } from '../owner';
import { OwnerService } from './owner-service/owner.service';

import { OwnersComponent } from './owners/owners.component';
import { OwnerDetailComponent } from './owner-detail/owner-detail.component';

const routes: Routes = [
  {
    path: 'owners',
    component: OwnersComponent
  },
  {
    path: 'owners/:id',
    component: OwnerDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
