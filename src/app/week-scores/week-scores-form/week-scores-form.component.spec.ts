import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeekScoresFormComponent } from './week-scores-form.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { GameService } from '../../game/game-service/game.service';

describe('WeekScoresFormComponent', () => {
  let component: WeekScoresFormComponent;
  let fixture: ComponentFixture<WeekScoresFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatSelectModule,
        MatButtonModule
      ],
      declarations: [ WeekScoresFormComponent ],
      providers: [ GameService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekScoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', inject([GameService, Router], (gameService: GameService, router: Router) => {
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
