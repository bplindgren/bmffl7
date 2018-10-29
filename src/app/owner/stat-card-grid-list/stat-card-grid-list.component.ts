import { Component, OnInit, Input, Output, EventEmitter,
  OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { OwnerService } from '../owner-service/owner.service';
import { TeamService } from '../../team/team-service/team.service';
import { ActivatedRoute } from '@angular/router';
import { Owner } from '../../owner';
import { AllTimeStats } from '../../allTimeStats';
import { SeasonStats } from '../../seasonStats';
import { StatCardComponent } from '../stat-card/stat-card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'stat-card-grid-list',
  templateUrl: './stat-card-grid-list.component.html',
  styleUrls: ['./stat-card-grid-list.component.css']
})
export class StatCardGridListComponent implements OnInit {
  @Input() owner: Owner;
  private allTimeStats: AllTimeStats;
  private ownerTeams: Team[];
  private cardStats: Array<String> = ["Wins", "Losses", "Ties", "Winning_Percentage", "Points_For", "Points_Against", "Point_Differential", "Points_For_Per_Game", "Points_Against_Per_Game", "PPG_Diff"]
  private statDict: Object = {
    "Wins": "wins",
    "Losses": "losses",
    "Ties": "ties",
    "Winning_Percentage": "winningpct",
    "Points_For": "pointsfor",
    "Points_Against": "pointsagainst",
    "Point_Differential": "pointdifferential",
    "Points_For_Per_Game": "pfpg",
    "Points_Against_Per_Game": "papg",
    "PPG_Diff": "ppgdiff"
  }
  @Output() evtEmitterStat: EventEmitter<Object> = new EventEmitter();

  constructor(
    private ownerService: OwnerService,
    private teamService: TeamService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id = Number(this.route.params.value["id"]);
    this.getData(id).subscribe(responseList => {
      // this.owner = responseList[0];
      this.allTimeStats = responseList[0];
      this.statValues = this.getCardStats(responseList[0]);
      this.ownerTeams = responseList[1];
      this.getStatData("Wins");
    })
  }

  getData(id: number): Observable<any[]> {
    let statsResponse = this.ownerService.getOwnerAllTimeStats(id);
    let teamResponse = this.teamService.getOwnerTeamsStatsView(id);
    return forkJoin([statsResponse, teamResponse])
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
      Points_Against_Per_Game: allTimeStats["papg"],
      PPG_Diff: allTimeStats["ppgDiff"]
    }
    console.log(cardStats);
    return cardStats;
  }

  formatKeys(str: string): string {
    return str.split("_").join(" ").split(" Percentage").join("%").split(" Per ").join("/");
  }

  getStatData(stat: string): Object {
    let statValues = this.ownerTeams.map(team =>
      ({ "name": team["year"], "value": team[this.statDict[stat]] })
    );
    let sortedValues = statValues.sort((a,b) => (a["name"] > b["name"]) ? 1 : ((b["name"] > a["name"]) ? -1 : 0));
    this.evtEmitterStat.emit(sortedValues);
  }

  ngOnChanges(changes: SimpleChanges) {
    let newOwnerId = changes.owner.currentValue.id;
    this.getData(newOwnerId);
  }

}
