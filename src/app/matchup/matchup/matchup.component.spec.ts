import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TableModule } from '../../shared-modules/table/table.module';
import { MatGridListModule } from '@angular/material/grid-list';

import { Owner } from '../../owner';
import { MatchupComponent } from './matchup.component';
import { MatchupFormComponent } from '../matchup-form/matchup-form.component';
import { MatchupTotalsComponent } from '../matchup-totals/matchup-totals.component';

import { GameService } from '../../game/game-service/game.service';
import { MockGameService } from '../../mocks/mockGameService';
import { TeamService } from '../../team/team-service/team.service';
import { MockTeamService } from '../../mocks/mockTeamService';

import { matchupStatsTestObj } from '../../test-objects/matchup/matchupStats';
import { ownersTestObj } from '../../test-objects/owners/ownersTestObj';
import { Owner1TestObj } from '../../test-objects/Owner1TestObj';
import { Owner2TestObj } from '../../test-objects/Owner2TestObj';

describe('MatchupComponent', () => {
  let component: MatchupComponent;
  let fixture: ComponentFixture<MatchupComponent>;
  let mockGameService: MockGameService;
  let mockTeamServiceOwner1: MockTeamService;
  let mockTeamServiceOwner2: MockTeamService;
  let getMatchupStatsSpy;

  beforeEach(async(() => {
    mockGameService = new MockGameService();
    mockTeamServiceOwner1 = new MockTeamService();
    mockTeamServiceOwner2 = new MockTeamService();

    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonToggleModule, TableModule, MatGridListModule],
      declarations: [ MatchupComponent, MatchupFormComponent, MatchupTotalsComponent ],
      providers: [
        { provide: GameService, useValue: MockGameService },
        { provide: TeamService, useValue: MockTeamService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchupComponent);
    component = fixture.componentInstance;

    getMatchupStatsSpy = spyOn(component, 'getMatchupStats').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should get matchup stats', () => {
  //   const e: Owner[] = [ownersTestObj[0], ownersTestObj[1]];
  //   console.log(e);
  //   mockGameService.setResponse(matchupStatsTestObj);
  //   mockTeamServiceOwner1.setResponse(Owner1TestObj);
  //   mockTeamServiceOwner2.setResponse(Owner2TestObj);
  //   component.getMatchupStats(e);
  //
  //   expect(getMatchupStatsSpy).toHaveBeenCalled();
  // });

});
