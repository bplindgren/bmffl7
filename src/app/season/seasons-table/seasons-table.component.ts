import { Component, OnInit, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'seasons-table',
  templateUrl: './seasons-table.component.html',
  styleUrls: ['./seasons-table.component.css']
})
export class SeasonsTableComponent implements OnInit {
  @Input() seasons: Season[];
  @Input() datasource;
  displayedColumns: string[] = ['year', 'champion', 'owner', 'division', 'wins', 'losses', 'ties'];

  constructor() { }

  ngOnInit() {
    console.log('seasons table created');
  }

}
