import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private upstairsOwners = [];
  private downstairsOwners = [];

  constructor(private ownerService: OwnerService) { }

  ngOnInit() {
    this.ownerService.getOwnerNames("upstairs").subscribe((owners) => {
      this.upstairsOwners = owners
      console.log(this.upstairsOwners)
    })
    this.ownerService.getOwnerNames("downstairs").subscribe((owners) => {
      // console.log(owners)
      this.downstairsOwners = owners
    })
  }

}

// export class MenuComponent {
//   isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
//   constructor(private breakpointObserver: BreakpointObserver) {}
// }
