import { Component, OnInit, Input } from '@angular/core';
import { MatchupStats } from '../../matchupStats';
import { Owner } from '../../owner';

@Component({
  selector: 'matchup-totals',
  templateUrl: './matchup-totals.component.html',
  styleUrls: ['./matchup-totals.component.css']
})
export class MatchupTotalsComponent implements OnInit {
  @Input() matchupStats: MatchupStats;
  @Input() owner1: Owner;
  @Input() owner2: Owner;
  private longestStreakO1;
  private currentStreakO2;
  private currentStreak;

  ngOnInit() {
    console.log("matchup stats received");
  }

}
