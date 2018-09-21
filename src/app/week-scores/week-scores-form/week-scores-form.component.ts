import { Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from '../../game.service';
import { Game } from '../../game';
import { Week } from '../../week';

@Component({
  selector: 'week-scores-form',
  templateUrl: './week-scores-form.component.html',
  styleUrls: ['./week-scores-form.component.css']
})
export class WeekScoresFormComponent implements OnChanges {
  @Input() season: number;
  @Input() week: number;
  private originalSeason: number;
  private originalWeek: number;
  private current = true;
  private seasons = ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"];
  private weeks = Array.apply(null, {length: 17}).map(Number.call, Number).splice(1);
  @Output() evtEmitterWeek: EventEmitter<Week> = new EventEmitter();

  constructor(
    private gameService: GameService,
    private router: Router) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.originalSeason = this.season;
    this.originalWeek = this.week;
    console.log(this.originalSeason, this.season, this.originalWeek, this.week)
    this.current = this.isCurrent();
    console.log(this.current);
  }

  emitWeek(): void {
    let w : Week = {
      season: this.season,
      week: this.week
    }
    this.evtEmitterWeek.emit(w);
    this.isCurrent();
  }

  backToCurrent(): void {
    let w : Week = {
      season: this.originalSeason,
      week: this.originalWeek
    }
    this.evtEmitterWeek.emit(w);
    this.isCurrent();
  }

  isCurrent(): boolean {
    return this.originalSeason == this.season && this.originalWeek == this.week;
  }

}
