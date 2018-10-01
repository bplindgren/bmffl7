import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Owner } from '../../owner';
import { SeasonService } from '../../season/season.service';
import { OwnerService } from '../owner-service/owner.service';
import { TeamService } from '../../team/team-service/team.service';
import { OwnerCardConfig } from '../../ownerCardConfig';

@Component({
  selector: 'owner-card',
  templateUrl: './owner-card.component.html',
  styleUrls: ['./owner-card.component.css']
})
export class OwnerCardComponent implements OnInit {
  @Input() config : OwnerCardConfig;
  private owner;
  private allTimeStats;
  private firstSeason;
  private lastSeason;
  private championships: string[];

  constructor() { }

  ngOnInit() {
    this.owner = this.config.owner;
    let seasons = this.config.teams.map(team => team.year).sort();
    this.championships = this.config.teams.filter(s => s.champion == "true").map(c => c.year);
    this.firstSeason = seasons.shift();
    this.lastSeason = seasons.pop();
    this.allTimeStats = this.config.stats;
  }

  displayChampionships(): string {
    let years = this.championships;
    if (years.length == 0) {
      return "None"
    } else {
      let champString: string = '';
      for (let year of years) {
        champString = champString + year + ", "
      }
      return champString.slice(0, -2);
    }
  }

}
