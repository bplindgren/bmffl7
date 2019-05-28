import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { filter } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { OwnerService } from '../owner-service/owner.service';
import { OwnerCardComponent } from '../owner-card/owner-card.component';
import { TeamService } from '../../team/team-service/team.service';
import { OwnerCardConfig } from '../../ownerCardConfig';
import { Owner } from '../../owner';
import { Team } from '../../team';
import { AllTimeStats } from '../../allTimeStats';

@Component({
  selector: 'owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {
  public allOwners: Owner[];
  public allTeams: Team[];
  public allTimeStats: AllTimeStats[];
  public ownerCardConfigArray: OwnerCardConfig[];
  public size: Observable<string>;
  public numCols: number;

  constructor(
    public ownerService: OwnerService,
    public teamService: TeamService,
    public breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.breakpointObserver.observe([
      '(max-width: 991px)',
      '(min-width: 992px)'
    ]).subscribe(result => {
      if (result.breakpoints['(max-width: 991px)']) {
        this.numCols = 3
      }
      if (result.breakpoints['(min-width: 992px)']) {
        this.numCols = 4
      }
    });

    this.getData().subscribe(responseList => {
      this.allOwners = responseList[0];
      this.allTimeStats = responseList[1];
      this.allTeams = responseList[2];
      this.ownerCardConfigArray = this.generateOwnerCardConfigArray();
    })
  }

  getData(): Observable<any[]> {
    let ownerResponse = this.ownerService.getAllOwners();
    let recordResponse = this.ownerService.getAllTimeStats();
    let teamResponse = this.teamService.getAllTeams();
    return forkJoin([ownerResponse, recordResponse, teamResponse]);
  }

  generateOwnerCardConfigArray(): OwnerCardConfig[] {
    let ownerConfigs : OwnerCardConfig[] = [];
    for (let i = 1; i <= 11; i++) {
      let oc : OwnerCardConfig = {
        owner: this.allOwners.filter(o => o.id == i)[0],
        teams: this.allTeams.filter(t => t.owner.id == i).sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)),
        stats: this.allTimeStats.filter(s => s.ownerId == i)[0]
      }
      ownerConfigs.push(oc);
    }
    return ownerConfigs;
  }

}
