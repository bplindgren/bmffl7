import { Component, Input, AfterContentInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from '../../game.service';
import { Game } from '../../game';

@Component({
  selector: 'week-scores-form',
  templateUrl: './week-scores-form.component.html',
  styleUrls: ['./week-scores-form.component.css']
})
export class WeekScoresFormComponent implements AfterContentInit {
  @Input() season: String;
  @Input() week: String;
  private seasons = ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"];
  private weeks = Array.apply(null, {length: 17}).map(Number.call, Number).splice(1);

  constructor(
    private gameService: GameService,
    private router: Router) { }

  ngAfterContentInit() {
    console.log(this)
  }
}
