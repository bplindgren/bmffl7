import { Component, OnInit, Input } from '@angular/core';
import { MatchupStats } from '../../matchupStats';

@Component({
  selector: 'matchup-totals',
  templateUrl: './matchup-totals.component.html',
  styleUrls: ['./matchup-totals.component.css']
})
export class MatchupTotalsComponent implements OnInit {
  @Input() matchupStats: MatchupStats;
  private longestStreak;
  private currentStreak;

  ngOnInit() {
    console.log(this.matchupStats);
  }

}
