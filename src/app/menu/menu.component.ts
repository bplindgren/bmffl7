import { Component, OnInit, AfterViewInit,
         ViewChild, ViewChildren, QueryList, ElementRef, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { OwnerService } from '../owner/owner-service/owner.service';
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
  private year: number;
  private week: number;

  @ViewChildren(MatMenuTrigger) menuChildren: QueryList<MatMenuTrigger>;
  @ViewChild("ownersMenu") ownersMenu: ElementRef;
  @ViewChild("seasonsMenu") seasonsMenu: ElementRef;

  constructor(private ownerService: OwnerService) { }

  ngOnInit() {
    this.ownerService.getOwnerNames("upstairs")
      .subscribe((owners) => { this.upstairsOwners = owners })
    this.ownerService.getOwnerNames("downstairs")
      .subscribe((owners) => { this.downstairsOwners = owners })

    this.year = this.getYear();
    this.week = this.getWeek();
  }

  ngAfterViewInit() {
    let matMenuTriggers: MatMenuTrigger[] = this.menuChildren.toArray();
  }

  getYear() {
    let now = new Date();
    return now.getFullYear();
  }

  getWeek() {
    let now = new Date();
    let start = new Date(now.getFullYear(), 0, 0);
    let diff = Math.abs(now - start) + Math.abs((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    let oneDay = 1000 * 60 * 60 * 24;
    let day = Math.floor(diff / oneDay);
    let week = Math.floor(day / 7) - 36
    return (week < 0) ?  1 : week;
  }

}
