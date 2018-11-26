import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Owner } from '../../owner';
import { Team } from '../../team';
import { AllTimeStats } from '../../allTimeStats';
import { SeasonService } from '../../season/season-service/season.service';
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
  private owner: Owner;
  private allTimeStats: AllTimeStats;
  private firstSeason: string;
  private lastSeason: string;
  private championships: string[];

  constructor() { }

  ngOnInit() {
    this.owner = this.config.owner;
    this.allTimeStats = this.config.stats;
    let seasons = this.config.teams.map(team => team.year).sort();
    this.firstSeason = seasons.shift();
    this.lastSeason = seasons.pop();
    // Error being thrown here is an open typescript bug:
    // https://github.com/Microsoft/TypeScript/issues/26592
    this.championships = this.config.teams.filter(team => team.champion != false).map(c => c.year);
  }

  displayChampionships(): string {
    if (this.championships.length == 0) {
      return "None"
    } else {
      let champString: string = '';
      for (let year of this.championships) {
        champString = `${champString} ${year}, `
      }
      return champString.slice(0, -2);
    }
  }

}
