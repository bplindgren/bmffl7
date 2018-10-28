import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { OwnerService } from '../owner-service/owner.service';
import { TeamService } from '../../team/team-service/team.service';
import { ActivatedRoute } from '@angular/router';
import { Owner } from '../../owner';
import { StatCardComponent } from '../stat-card/stat-card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent implements OnInit {
  private owner: Owner;

  constructor(
    private ownerService: OwnerService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.ownerService.getOwner(this.route.params.value["id"])
      .subscribe(owner => {
        this.owner = owner;
      }
    )
    this.route.url.subscribe(url => {
      this.ownerService.getOwner(url[1])
        .subscribe(newOwner => {
          this.owner = newOwner;
        })
    })
  }
  log(str: string) {
    console.log("NEW STAT GRAPH: " + str);
  }

  ngAfterViewInit() {
    console.log("owner detail view initialized");
  }

  ngOnDestroy() {
    console.log("owner detail destroyed");
  }
}
