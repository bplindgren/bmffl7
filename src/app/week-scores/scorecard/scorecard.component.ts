import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../game';
import { TeamService } from '../../team/team-service/team.service';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  @Input() game: Game;
  private awayRecord: Number[];
  private homeRecord: Number[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeamRecord(this.game.awayTeam.id, this.game.week)
      .subscribe(r => this.awayRecord = r)
    this.teamService.getTeamRecord(this.game.homeTeam.id, this.game.week)
      .subscribe(r => this.homeRecord = r)
  }

}
