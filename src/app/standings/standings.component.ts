import { Component, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { OwnerService } from '../owner/owner-service/owner.service';
import { AllTimeStats } from '../allTimeStats';

@Component({
  selector: 'standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent {
  dataSource: any;
  public displayedColumns: string[] = ['owner', 'seasons', 'wins', 'losses', 'ties', 'winningpct', 'pointsfor', 'pointsagainst', 'pointdifferential', 'pfpg', 'papg', 'pdiff'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(public ownerService: OwnerService) { }

  ngOnInit() {
    this.ownerService.getAllTimeStats().subscribe(res => {
      this.dataSource = new MatTableDataSource<AllTimeStats>(res);
      this.dataSource.sort = this.sort;
    });
  }
}
