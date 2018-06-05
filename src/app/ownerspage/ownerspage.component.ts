import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OwnerService } from '../owner.service';
import { ActivatedRoute } from '@angular/router';
import { Owner } from '../owner';


@Component({
  selector: 'app-ownerspage',
  templateUrl: './ownerspage.component.html',
  styleUrls: ['./ownerspage.component.css']
})
export class OwnerspageComponent implements OnInit {
  owner: Owner;

  constructor(
    private ownerService: OwnerService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.owner = data['owner'];
    })
  }

}
