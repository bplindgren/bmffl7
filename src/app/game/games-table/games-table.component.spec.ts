import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GamesTableComponent } from './games-table.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { TableModule } from '../../shared-modules/table/table.module';

import { unsortedGames } from '../../test-objects/games/unsortedGames';

describe('GamesTableComponent', () => {
  let component: GamesTableComponent;
  let fixture: ComponentFixture<GamesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NoopAnimationsModule, MatTableModule, TableModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesTableComponent);
    component = fixture.componentInstance;
    component.games = unsortedGames;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should receive games as input and sort them', () => {
    expect(component.games.map(g => g.id)).toEqual(jasmine.arrayContaining([614, 615, 616, 617, 618]));
  })
});
