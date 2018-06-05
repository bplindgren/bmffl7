import { NgModule } from '@angular/core';
import { RouterModule, Routes, Resolve } from '@angular/router';

import { Owner } from './owner'

import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { OwnersComponent } from './owners/owners.component';
import { OwnerspageComponent } from './ownerspage/ownerspage.component';
import { OwnerspageResolver } from './ownerspage.resolver'
import { CardlistComponent } from './cardlist/cardlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cardList', component: CardlistComponent },
  { path: 'owners', component: OwnersComponent },
  { path: 'owners/:name',
    component: OwnerspageComponent,
    resolve: { owner: OwnerspageResolver }},
  { path: 'teams', component: TeamComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ OwnerspageResolver ]
})
export class AppRoutingModule { }
