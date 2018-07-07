import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OwnerService } from '../owner-service/owner.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {
  private allOwners = [];

  constructor(
    private ownerService: OwnerService,
    private route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.ownerService.getAllOwners()
      .subscribe(owners => { this.allOwners = owners })
  }

}
