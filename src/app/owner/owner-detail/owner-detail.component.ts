import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { OwnerService } from '../owner-service/owner.service';
import { ActivatedRoute } from '@angular/router';
import { Owner } from '../../owner';

@Component({
  selector: 'app-owner-detail',
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
    this.route.data.subscribe((data: { owner: Owner }) => {
      this.owner = data['owner'];
    })
  }
}
