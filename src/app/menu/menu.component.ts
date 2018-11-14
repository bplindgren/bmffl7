import { Component, OnInit, AfterViewInit, Input, Output,
         ViewChild, ViewChildren, QueryList, ElementRef,
         EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { OwnerService } from '../owner/owner-service/owner.service';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { seasons } from '../seasons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {
  private upstairsOwners = [];
  private downstairsOwners = [];
  private bmfflSeasons = seasons;

  @ViewChildren(MatMenuTrigger) menuChildren: QueryList<MatMenuTrigger>;
  @ViewChild("ownersMenu") ownersMenu: ElementRef;
  @ViewChild("seasonsMenu") seasonsMenu: ElementRef;
  @Output() evtEmitterOwnerId: EventEmitter<Number> = new EventEmitter();

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
