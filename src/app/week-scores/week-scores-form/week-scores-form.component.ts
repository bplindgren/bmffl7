import { Component, } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'week-scores-form',
  templateUrl: './week-scores-form.component.html',
  styleUrls: ['./week-scores-form.component.css']
})
export class WeekScoresFormComponent {
  private seasons = ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"];
  private weeks = Array.apply(null, {length: 16}).map(Number.call, Number).splice(1);

  constructor() { }

  onSubmit(f: NgForm) {
    console.log(f.season, f.week)
    console.log(f.valid)
  }
}
