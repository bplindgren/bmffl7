import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../game';
import { TeamService } from '../../team/team-service/team.service';

@Component({
  selector: 'scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements ngOnInit {
  @Input() game: Game;
  private awayRecord: number[];
  private homeRecord: number[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeamRecord(this.game.awayTeam.id, this.game.week)
      .subscribe(r => this.awayRecord = r)
    this.teamService.getTeamRecord(this.game.homeTeam.id, this.game.week)
      .subscribe(r => this.homeRecord = r)
    console.log("scorecard: ", this.game, this.awayRecord, this.homeRecord)
  }

}
