import { Component, OnInit, AfterViewInit,
         ViewChild, ViewChildren, QueryList, ElementRef, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { OwnerService } from '../owner.service';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { Years } from '../enums/years.enum';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {
  private upstairsOwners = [];
  private downstairsOwners = [];

  yearsEnum = Object.keys(Years).filter(key => key.length > 1)

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
    console.log(this.yearsEnum)
  }

  // printEnum(private enum: Enum) {
  //   console.log(Object.keys(enum))
  // }

}

// export class MenuComponent {
//   isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
//   constructor(private breakpointObserver: BreakpointObserver) {}
// }
