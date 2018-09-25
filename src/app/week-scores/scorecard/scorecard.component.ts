import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../game';
import { TeamService } from '../../team/team-service/team.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  @Input() game: Game;
  private awayRecord: number[];
  private homeRecord: number[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeamRecord(this.game.awayTeam.id, this.game.week)
      .subscribe(r => this.awayRecord = r)
    this.teamService.getTeamRecord(this.game.homeTeam.id, this.game.week)
      .subscribe(r => this.homeRecord = r)
  }

}
