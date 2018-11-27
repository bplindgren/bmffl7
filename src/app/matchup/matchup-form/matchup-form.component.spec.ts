import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { MatchupFormComponent } from './matchup-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TableModule } from '../../shared-modules/table/table.module';
import { MatGridListModule } from '@angular/material/grid-list';

import { OwnerService } from '../../owner/owner-service/owner.service';
import { GameService } from '../../game/game-service/game.service';

describe('MatchupFormComponent', () => {
  let component: MatchupFormComponent;
  let fixture: ComponentFixture<MatchupFormComponent>;
  let testBedOwnerService: OwnerService;
  let testBedGameService: GameService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonToggleModule,
        TableModule,
        MatGridListModule,
      ],
      declarations: [ MatchupFormComponent ],
      providers: [
        OwnerService,
        GameService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchupFormComponent);
    component = fixture.componentInstance;

    testBedOwnerService = TestBed.get(OwnerService);
    testBedGameService = TestBed.get(GameService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
