import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { OwnersComponent } from './owners/owners.component';
import { CardlistComponent } from './cardlist/cardlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cardList', component: CardlistComponent },
  { path: 'owners', component: OwnersComponent },
  { path: 'teams', component: TeamComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
