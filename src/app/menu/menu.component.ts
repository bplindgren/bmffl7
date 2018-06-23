import { Component, OnInit, AfterViewInit, Input,
         ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
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
    console.log(`ngAfterViewInit - menuChildren is ${this.menuChildren}`);
  }

  getYear() {
    let now = new Date();
    return now.getFullYear();
  }

  getWeek() {
    let now = new Date();
    let start = new Date(now.getFullYear(), 0, 0);
    let left = (Math.abs(now.getTime() - start.getTime()));
    let right = (Math.abs((start.getTimezoneOffset()- now.getTimezoneOffset()) * 60 * 1000));
    let sum = left + right;
    let oneDay = 1000 * 60 * 60 * 24;
    let day = Math.floor(sum / oneDay);
    let week = Math.floor(day / 7) - 36
    return (week < 0) ?  1 : week;
  }

}
