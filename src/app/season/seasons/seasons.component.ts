import { Component, OnInit } from '@angular/core';
import { SeasonService } from '../season-service/season.service';
import { TeamService } from '../../team/team-service/team.service';
import { Season } from '../../season';

@Component({
  selector: 'seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {
  public seasons: Season[];

  constructor(
    public seasonService: SeasonService) {
  }

  ngOnInit() {
    this.seasonService.getSeasons().subscribe(res => {
      this.seasons = res.sort((a,b) =>
        (a["id"] > b["id"]) ? 1 : ((b["id"] > a["id"]) ? -1 : 0)
      )
    })
  }

}
