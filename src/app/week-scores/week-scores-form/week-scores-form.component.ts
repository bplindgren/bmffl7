import { Component, Input, OnInit, AfterContentInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from '../../game.service';
import { Game } from '../../game';

@Component({
  selector: 'week-scores-form',
  templateUrl: './week-scores-form.component.html',
  styleUrls: ['./week-scores-form.component.css']
})
export class WeekScoresFormComponent implements OnInit, AfterContentInit {
  @Input() season: String;
  @Input() week: String;
  private originalSeason: String;
  private originalWeek: String;
  private current = true;
  private seasons = ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"];
  private weeks = Array.apply(null, {length: 17}).map(Number.call, Number).splice(1);

  constructor(
    private gameService: GameService,
    private router: Router
  ) { }

  ngOnInit() {
    this.originalSeason = this.season;
    this.originalWeek = this.week;
  }

  ngAfterContentInit() {
    console.log(this)
  }

  changeWeek(): void {
    this.current = this.isCurrent();
  }

  updateFormDropDowns(): void {
    this.season = this.originalSeason;
    this.week = this.originalWeek;
    this.current = this.isCurrent();
    console.log(this.current);
  }

  isCurrent(): boolean {
    return this.originalSeason == this.season && this.originalWeek == this.week;
  }

}
