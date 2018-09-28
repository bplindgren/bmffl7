import { Component, OnInit, Input } from '@angular/core';
import { Owner } from '../../owner';
import { SeasonService } from '../../season/season.service';
import { OwnerService } from '../owner-service/owner.service';

@Component({
  selector: 'owner-card',
  templateUrl: './owner-card.component.html',
  styleUrls: ['./owner-card.component.css']
})
export class OwnerCardComponent implements OnInit {
  @Input() owner : Owner;
  private seasons;
  private allTimeRecord;

  constructor(
    private seasonService: SeasonService,
    private ownerService: OwnerService) {
  }

  ngOnInit() {
    this.seasonService.getOwnerSeasons(this.owner.id)
      .subscribe(res => { this.seasons = res })
    this.ownerService.getAllTimeRecord(this.owner.id)
      .subscribe(res => { this.allTimeRecord = res })
  }

}
