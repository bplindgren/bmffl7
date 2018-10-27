import { Component, OnInit, Input } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { OwnerService } from '../owner-service/owner.service';
import { TeamService } from '../../team/team-service/team.service';
import { ActivatedRoute } from '@angular/router';
import { Owner } from '../../owner';
import { AllTimeStats } from '../../allTimeStats';
import { StatCardComponent } from '../stat-card/stat-card';

@Component({
  selector: 'owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent implements OnInit {
  private owner: Owner;
  private allTimeStats: AllTimeStats;
  private cardStats: Array<String> = ["Wins", "Losses", "Ties", "Winning_Percentage", "Points_For", "Points_Against", "Point_Differential", "Points_For_Per_Game", "Points_Against_Per_Game"]
  private statValues: Object;
  private objectKeys = Object.keys;

  constructor(
    private ownerService: OwnerService,
    private teamService: TeamService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getData().subscribe(responseList => {
      this.allTimeStats = responseList[1];
      this.statValues = this.getCardStats(responseList[1]);
      console.log(this.allTimeStats);
    })
  }

  getData(): Observable<any[]> {
    let id = Number(this.route.params.value["id"]);
    let ownerResponse = this.ownerService.getOwner(id);
    let statsResponse = this.ownerService.getOwnerAllTimeStats(id);
    let teamResponse = this.teamService.getOwnerTeams(id);
    return forkJoin([ownerResponse, statsResponse, teamResponse]);
  }

  getCardStats(allTimeStats: AllTimeStats): Object {
  console.log(allTimeStats)
    let cardStats : Object = {
      Wins: allTimeStats["wins"],
      Losses: allTimeStats["losses"],
      Ties: allTimeStats["ties"],
      Winning_Percentage: allTimeStats["winningPct"],
      Points_For: allTimeStats["pointsFor"],
      Points_Against: allTimeStats["pointsAgainst"],
      Point_Differential: allTimeStats["pointDifferential"],
      Points_For_Per_Game: allTimeStats["pfpg"],
      Points_Against_Per_Game: allTimeStats["papg"]
    }
    console.log(cardStats);
    return cardStats;
  }

  formatKeys(str: string): string {
    return str.split("_").join(" ").split(" Percentage").join("%").split(" Per ").join("/");
  }

  // ngAfterViewInit() {
  //   console.log("owner detail view initialized");
  // }
  //
  // ngOnDestroy() {
  //   console.log("owner detail destroyed");
  // }
}
