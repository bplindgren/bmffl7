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
  private owner: Owner = null;
  private name: String;

  constructor(private ownerService: OwnerService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['name']
      this.getOwner()
    })
  }

  getOwner() {
    console.log(this.name)
    this.ownerService.getOwner(this.name).subscribe(o => { this.owner = o })
  }

}
