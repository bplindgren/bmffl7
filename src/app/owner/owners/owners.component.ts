import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OwnerService } from '../owner-service/owner.service';
import { ActivatedRoute } from '@angular/router';
import { OwnerCardComponent } from '../owner-card/owner-card.component';

@Component({
  selector: 'owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {
  private allOwners = [];
  private ownerSeasons = {};

  constructor(
    private ownerService: OwnerService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.ownerService.getAllOwners()
      .subscribe(owners => { this.allOwners = owners }
    )
  }

}
