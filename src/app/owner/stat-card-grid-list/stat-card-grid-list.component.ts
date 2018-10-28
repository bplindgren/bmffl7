import { Component, OnInit, Input, Output, EventEmitter,
  OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { OwnerService } from '../owner-service/owner.service';
import { TeamService } from '../../team/team-service/team.service';
import { ActivatedRoute } from '@angular/router';
import { Owner } from '../../owner';
import { AllTimeStats } from '../../allTimeStats';
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
  private cardStats: Array<String> = ["Wins", "Losses", "Ties", "Winning_Percentage", "Points_For", "Points_Against", "Point_Differential", "Points_For_Per_Game", "Points_Against_Per_Game", "PPG_Diff"]
  @Output() evtEmitterStat: EventEmitter<string> = new EventEmitter();

  constructor(
    private ownerService: OwnerService,
    private teamService: TeamService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id = Number(this.route.params.value["id"]);
    this.getData(id)
  }

  getData(id: number): Observable<any[]> {
    let statsResponse = this.ownerService.getOwnerAllTimeStats(id);
    let teamResponse = this.teamService.getOwnerTeams(id);
    forkJoin([statsResponse, teamResponse]).subscribe(responseList => {
      // this.owner = responseList[0];
      this.allTimeStats = responseList[0];
      this.statValues = this.getCardStats(responseList[0]);
    })
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
      PPG_Diff: (allTimeStats["pfpg"]-allTimeStats["papg"]).toFixed(1)
    }
    console.log(cardStats);
    return cardStats;
  }

  formatKeys(str: string): string {
    return str.split("_").join(" ").split(" Percentage").join("%").split(" Per ").join("/");
  }

  getStatData(stat: string): void {
    this.evtEmitterStat.emit(stat);
  }

  ngOnChanges(changes: SimpleChanges) {
    let newOwnerId = changes.owner.currentValue.id;
    this.getData(newOwnerId);
  }

}
