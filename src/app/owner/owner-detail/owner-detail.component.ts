import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { OwnerService } from '../owner-service/owner.service';
import { ActivatedRoute } from '@angular/router';
import { Owner } from '../../owner';

@Component({
  selector: 'owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent implements OnInit {
  @Input() owner: Owner;

  constructor(
    private ownerService: OwnerService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log("owner init")
    this.route.data.subscribe((data: { owner: Owner }) => {
      this.owner = data['owner'];
    })
    console.log("owner init done")
  }

  ngAfterViewInit() {
    console.log("owner detail view initialized");
  }

  ngOnDestroy() {
    console.log("owner detail destroyed");
  }
}
