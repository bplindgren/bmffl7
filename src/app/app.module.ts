import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { GameService } from './game.service';
import { OwnerService } from './owner.service';
import { AppRoutingModule } from './app-routing.module';
import { TeamComponent } from './team/team.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatCardModule, MatGridListModule, MatMenuModule } from '@angular/material';
import { OwnersComponent } from './owners/owners.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { MenuComponent } from './menu/menu.component';
import { MainNavComponent } from './main-nav/main-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    OwnersComponent,
    CardlistComponent,
    MenuComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule
  ],
  providers: [GameService, OwnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
