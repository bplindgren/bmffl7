import { Component, OnInit, Input } from '@angular/core';
import { Owner } from '../../owner';
import { SeasonService } from '../../season/season.service';

@Component({
  selector: 'owner-card',
  templateUrl: './owner-card.component.html',
  styleUrls: ['./owner-card.component.css']
})
export class OwnerCardComponent implements OnInit {
  @Input() owner : Owner;

  constructor(
    private seasonService: SeasonService) {
  }

  ngOnInit() {
    this.seasonService.getOwnerSeasons(this.owner.id)
      .subscribe(seasons => {
        console.log(seasons)
      })
  }

}
