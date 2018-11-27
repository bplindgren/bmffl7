import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { MatCardModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { TableModule } from '../../shared-modules/table/table.module';

import { OwnerDetailComponent } from './owner-detail.component';
import { StatCardGridListComponent } from '../stat-card-grid-list/stat-card-grid-list.component';
import { StatCardComponent } from '../stat-card/stat-card.component';

describe('OwnerDetailComponent', () => {
  let component: OwnerDetailComponent;
  let fixture: ComponentFixture<OwnerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
        MatCardModule,
        MatExpansionModule,
        MatGridListModule,
        MatTableModule,
        TableModule
      ],
      declarations: [ OwnerDetailComponent, StatCardGridListComponent, StatCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
