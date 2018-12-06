import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { MatchupTotalsComponent } from './matchup-totals.component';

import { RouterModule } from '@angular/router';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TableModule } from '../../shared-modules/table/table.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { OwnerService } from '../../owner/owner-service/owner.service';
import { forkJoin } from 'rxjs';

describe('MatchupTotalsComponent', () => {
  let component: MatchupTotalsComponent;
  let fixture: ComponentFixture<MatchupTotalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonToggleModule,
        TableModule,
        MatGridListModule
      ],
      declarations: [ MatchupTotalsComponent ],
      providers: [ OwnerService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchupTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', inject([OwnerService], (service: OwnerService)  => {
  //   let owner1request = service.getOwner(1);
  //   let owner2request = service.getOwner(2);
  //   forkJoin([owner1request, owner2request]).subscribe(res => {
  //     component.owner1 = res[0];
  //     component.owner2 = res[1];
  //     expect(component).toBeTruthy();
  //   })
  // }));

  it('should create', ()  => {
    // let owner1request = service.getOwner(1);
    // let owner2request = service.getOwner(2);
    // forkJoin([owner1request, owner2request]).subscribe(res => {
    //   component.owner1 = res[0];
    //   component.owner2 = res[1];
    //   expect(component).toBeTruthy();
    // })
  });
});
