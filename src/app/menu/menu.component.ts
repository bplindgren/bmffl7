import { Component, OnInit, AfterViewInit,
         ViewChild, ViewChildren, QueryList, ElementRef, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { OwnerService } from '../owner.service';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {
  private upstairsOwners = [];
  private downstairsOwners = [];
  private years = ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"];

  @ViewChildren(MatMenuTrigger) menuChildren: QueryList<MatMenuTrigger>;
  @ViewChild("ownersMenu") ownersMenu: ElementRef;
  @ViewChild("seasonsMenu") seasonsMenu: ElementRef;

  constructor(private ownerService: OwnerService) { }

  ngOnInit() {
    this.ownerService.getOwnerNames("upstairs")
      .subscribe((owners) => { this.upstairsOwners = owners })
    this.ownerService.getOwnerNames("downstairs")
      .subscribe((owners) => { this.downstairsOwners = owners })
  }

  ngAfterViewInit() {
    let matMenuTriggers: MatMenuTrigger[] = this.menuChildren.toArray();
    console.log(matMenuTriggers)
  }

  // printEnum(private enum: Enum) {
  //   console.log(Object.keys(enum))
  // }

}

// export class MenuComponent {
//   isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
//   constructor(private breakpointObserver: BreakpointObserver) {}
// }
