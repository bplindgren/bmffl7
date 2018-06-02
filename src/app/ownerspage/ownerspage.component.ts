import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-ownerspage',
  templateUrl: './ownerspage.component.html',
  styleUrls: ['./ownerspage.component.css']
})
export class OwnerspageComponent implements OnInit {
  private owner = null;

  constructor(private ownerService: OwnerService) { }

  ngOnInit() {
    this.ownerService.getOwner(name)
      .subscribe(o => { this.owner = o })
    console.log(this.owner)
  }

}
