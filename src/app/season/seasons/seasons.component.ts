import { Component, OnInit } from '@angular/core';
import { SeasonService } from '../season-service/season.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {

  constructor(
    private seasonService: SeasonService;
  ) { }

  ngOnInit() {
    this.seasonService.getSeasons();
  }

}
