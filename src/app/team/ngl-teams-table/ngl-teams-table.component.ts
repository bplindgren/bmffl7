import { Component, OnInit, Input } from '@angular/core';
import { INglDatatableSort, INglDatatableRowClick } from 'ng-lightning/ng-lightning';
import { Team } from '../../team';
import { RouterModule } from '@angular/router';

// const DATA = [
//   { rank: 1, name: 'Kareem', surname: 'Abdul-Jabbar', points: 38387 },
//   { rank: 2, name: 'Karl', surname: 'Malone', points: 36928 },
//   { rank: 3, name: 'Kobe', surname: 'Bryant', points: 33643 },
//   { rank: 4, name: 'Michael', surname: 'Jordan', points: 32292 },
//   { rank: 5, name: 'Wilt', surname: 'Chamberlain', points: 31419 },
// ];

@Component({
  selector: 'ngl-teams-table',
  templateUrl: './ngl-teams-table.component.html',
  styleUrls: ['./ngl-teams-table.component.css']
})
export class NglTeamsTableComponent {
  @Input() data: Team[];

  // data = DATA;

  // Initial sort
  sort: INglDatatableSort = { key: 'year', order: 'asc' };

  // Show loading overlay
  loading = false;

  striped: true;
  bordered: true;

  // Toggle name column
  // hideName = false;

  // Custom sort function
  onSort($event: INglDatatableSort) {
    const { key, order } = $event;
    // this.data.sort((a: any, b: any) => {
    //   return (key === 'rank' ? b[key] - a[key] : b[key].localeCompare(a[key])) * (order === 'desc' ? 1 : -1);
    // });
    this.data.sort((a: any, b: any) => {
      return (key === 'year' ? +String(b[key]) - +String(a[key]) : String(b[key]).localeCompare(String(a[key]))) * (order === 'desc' ? 1 : -1);
    });
  }

  // toggleData() {
  //   this.data = this.data ? null : DATA;
  // }

  onRowClick($event: INglDatatableRowClick) {
    console.log('clicked row', $event.data);
  }
}
