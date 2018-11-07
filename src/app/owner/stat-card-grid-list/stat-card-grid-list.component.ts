import { Component, OnInit, Input, Output, EventEmitter,
  OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { OwnerService } from '../owner-service/owner.service';
import { TeamService } from '../../team/team-service/team.service';
import { SeasonService } from '../../season/season.service';
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

  constructor() { }

  ngOnInit() {
    this.statValues = this.getCardStats(this.allTimeStats);
    this.cardStats = ["Wins", "Losses", "Ties", "Winning_Percentage", "Points_For", "Points_Against", "Point_Differential", "Points_For_Per_Game", "Points_Against_Per_Game", "PPG_Differential"];
  }

  getCardStats(allTimeStats: AllTimeStats): Object {
    let cardStats : Object = {
      Wins: allTimeStats["wins"],
      Losses: allTimeStats["losses"],
      Ties: allTimeStats["ties"],
      Winning_Percentage: allTimeStats["winningpct"],
      Points_For: allTimeStats["pointsfor"],
      Points_Against: allTimeStats["pointsagainst"],
      Point_Differential: allTimeStats["pointdifferential"],
      Points_For_Per_Game: allTimeStats["pfpg"],
      Points_Against_Per_Game: allTimeStats["papg"],
      PPG_Differential: allTimeStats["ppgdiff"]
    }
    return cardStats;
  }

  formatKey(str: string): void {
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
    this.getGraphData("Wins");
    this.statValues = this.getCardStats(changes['allTimeStats']['currentValue'])
  }

}
