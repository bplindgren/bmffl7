import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { ScorecardComponent } from './scorecard.component';
import { MatCardModule } from '@angular/material/card';
import { TeamService } from '../../team/team-service/team.service';
import { RouterModule } from '@angular/router';
import { TestGameObj } from '../../testGameObject'

describe('ScorecardComponent', () => {
  let component: ScorecardComponent;
  let fixture: ComponentFixture<ScorecardComponent>;

  beforeEach(async(() => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, MatCardModule, RouterModule ],
      declarations: [ ScorecardComponent ],
      providers: [ TeamService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorecardComponent);
    component = fixture.componentInstance;
    component.game = TestGameObj;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
