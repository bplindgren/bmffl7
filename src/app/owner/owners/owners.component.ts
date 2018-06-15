import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OwnerService } from '../owner-service/owner.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {
  private allOwners = [];

  constructor(private ownerService: OwnerService) { }

  ngOnInit() {
    this.ownerService.getAllOwners()
      .subscribe(owners => { this.allOwners = owners })
    console.log(this.allOwners)
  }

}
