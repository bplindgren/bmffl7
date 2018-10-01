import { Component, OnInit, AfterViewInit, Input,
         ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { OwnerService } from '../owner/owner-service/owner.service';
import { MatCardModule } from '@angular/material/card';
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
    this.ownerService.getAllOwners()
      .subscribe((owners) => {
        this.upstairsOwners = owners.filter(o => o.division == "upstairs")
        this.downstairsOwners = owners.filter(o => o.division == "downstairs")
      }
    )
  }

  ngAfterViewInit() {
    let matMenuTriggers: MatMenuTrigger[] = this.menuChildren.toArray();
    console.log(`ngAfterViewInit - menuChildren is ${this.menuChildren}`);
    console.log(`ngAfterViewInit - ownersMenu is ${this.ownersMenu}`);
    console.log(`ngAfterViewInit - seasonsMenu is ${this.seasonsMenu}`);
  }

}
