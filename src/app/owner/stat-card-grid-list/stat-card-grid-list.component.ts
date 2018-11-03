import { Component, OnInit, Input, Output, EventEmitter,
  OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { OwnerService } from '../owner-service/owner.service';
import { TeamService } from '../../team/team-service/team.service';
import { SeasonService } from '../../season/season.service';
import { ActivatedRoute } from '@angular/router';
import { Owner } from '../../owner';
import { AllTimeStats } from '../../allTimeStats';
import { SeasonStats } from '../../seasonStats';
import { statDictionary } from '../../statDictionary';
import { StatCardComponent } from '../stat-card/stat-card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'stat-card-grid-list',
  templateUrl: './stat-card-grid-list.component.html',
  styleUrls: ['./stat-card-grid-list.component.css']
})
export class StatCardGridListComponent implements OnInit {
  @Input() owner: Owner;
  @Input() allTimeStats: AllTimeStats;
  @Input() ownerTeams: Team[];
  @Output() evtEmitterStat: EventEmitter<Object> = new EventEmitter();
  initialized: boolean = false;

  constructor(
    private ownerService: OwnerService,
    private teamService: TeamService,
    private seasonService: SeasonService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id = Number(this.route.params.value["id"]);
    this.getData(id);
  }

  getData(id: number): void {
    let statsResponse = this.ownerService.getOwnerAllTimeStats(id);
    let teamResponse = this.teamService.getOwnerTeamsStatsView(id);
    let yearAverages = this.seasonService.getSeasonAverages();
    forkJoin([statsResponse, teamResponse, yearAverages]).subscribe(responseList => {
      // this.owner = responseList[0];
      console.log(responseList[2])
      this.allTimeStats = responseList[0];
      this.cardStats = ["Wins", "Losses", "Ties", "Winning_Percentage", "Points_For", "Points_Against", "Point_Differential", "Points_For_Per_Game", "Points_Against_Per_Game", "PPG_Differential"];
      this.statValues = this.getCardStats(responseList[0]);
      this.ownerTeams = responseList[1];
      this.getGraphData("Wins");
      this.initialized = true;
    })
  }

  getCardStats(allTimeStats: AllTimeStats): Object {
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
      PPG_Differential: allTimeStats["ppgDiff"]
    }
    return cardStats;
  }

  formatKey(str: string): string {
    return str.split("_").join(" ").split(" Percentage").join("%").split(" Per ").join("/");
  }

  getGraphData(stat: string): Object {
    let statValues = this.ownerTeams.map(team =>
      ({ "name": team["year"], "value": team[statDictionary[stat]] })
    );
    let sortedValues = statValues.sort((a,b) =>
      (a["name"] > b["name"]) ? 1 : ((b["name"] > a["name"]) ? -1 : 0)
    );
    let emitArray: Array<any> = [sortedValues, this.formatKey(stat)];
    this.evtEmitterStat.emit(emitArray);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.initialized) {
      let newOwnerId = changes.owner.currentValue.id;
      this.getData(newOwnerId);
    }
  }

}
