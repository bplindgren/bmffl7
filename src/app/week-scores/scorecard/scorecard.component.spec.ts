import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { TeamService } from '../../team/team-service/team.service';
import { MockTeamService } from '../../mocks/mockTeamService';

import { ScorecardComponent } from './scorecard.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { TestGameObj } from '../../testGameObject'

describe('ScorecardComponent', () => {
  let component: ScorecardComponent;
  let fixture: ComponentFixture<ScorecardComponent>;
  let mockTeamService: MockTeamService;

  beforeEach(async(() => {
    mockTeamService = new MockTeamService;

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, MatCardModule, RouterModule ],
      declarations: [ ScorecardComponent ],
      providers: [
        { provide: TeamService, useValue: mockTeamService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorecardComponent);
    component = fixture.componentInstance;
    component.game = TestGameObj;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make calls for team records', () => {
    expect(mockTeamService.getTeamRecordSpy).toHaveBeenCalledWith(74, 13);
    expect(mockTeamService.getTeamRecordSpy).toHaveBeenCalledWith(73, 13);
  });

});
