import { Component, OnInit, Input } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { OwnerService } from '../owner-service/owner.service';
import { TeamService } from '../../team/team-service/team.service';
import { ActivatedRoute } from '@angular/router';
import { Owner } from '../../owner';

@Component({
  selector: 'owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent implements OnInit {
  private allTimeStats[];

  constructor(
    private ownerService: OwnerService,
    private teamService: TeamService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getData().subscribe(responseList => {
      console.log(responseList)
    })
  }

  getData(): Observable<any[]> {
    let id = Number(this.route.params.value["id"]);
    let ownerResponse = this.ownerService.getOwner(id);
    let statsResponse = this.ownerService.getOwnerAllTimeStats(id);
    let teamResponse = this.teamService.getOwnerTeams(id);
    return forkJoin([ownerResponse, statsResponse, teamResponse]);
  }

  ngAfterViewInit() {
    console.log("owner detail view initialized");
  }

  ngOnDestroy() {
    console.log("owner detail destroyed");
  }
}
