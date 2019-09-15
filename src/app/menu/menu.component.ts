import { Component, OnInit, AfterViewInit, Input, Output,
         ViewChild, ViewChildren, QueryList, ElementRef,
         EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { User } from '../user';
import { OwnerService } from '../owner/owner-service/owner.service';
import { UserService } from '../user/user-service/user.service';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { seasons } from '../seasons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {
  public upstairsOwners = [];
  public downstairsOwners = [];
  public bmfflSeasons = seasons;
  public loggedIn: String = null;
  public userProfile: String = null;

  @ViewChildren(MatMenuTrigger) menuChildren: QueryList<MatMenuTrigger>;
  @ViewChild("ownersMenu") ownersMenu: ElementRef;
  @ViewChild("seasonsMenu") seasonsMenu: ElementRef;
  @Output() evtEmitterOwnerId: EventEmitter<Number> = new EventEmitter();

  constructor(
    private ownerService: OwnerService,
    private userService: UserService) {
      userService.getLoggedInUser.subscribe(name => {
        this.updateLoggedIn();
    });
  }

  ngOnInit() {
    this.updateLoggedIn();

    this.ownerService.getAllOwners()
      .subscribe((owners) => {
        this.upstairsOwners = owners.filter(o => o.division == "upstairs")
        this.downstairsOwners = owners.filter(o => o.division == "downstairs")
      }
    )
  }

  updateLoggedIn() {
    if (localStorage['currentUser'] != null) {
      let userInfo = localStorage['currentUser'];

      let usernameStartIdx = userInfo.indexOf("username") + 11;
      let usernameEndIdx = userInfo.indexOf("\"", usernameStartIdx);
      let username = userInfo.substring(usernameStartIdx, usernameEndIdx);
      this.loggedIn = username;

      let idStartIdx = userInfo.indexOf("id") + 4;
      let idEndIdx = userInfo.indexOf(",", idStartIdx);
      let userId = userInfo.substring(idStartIdx, idEndIdx);
      this.userProfile = '/user/' + userId;
    } else {
      this.loggedIn = null;
    }
  }

  ngAfterViewInit() {
    let matMenuTriggers: MatMenuTrigger[] = this.menuChildren.toArray();
    console.log(`ngAfterViewInit - menuChildren is ${this.menuChildren}`);
    console.log(`ngAfterViewInit - ownersMenu is ${this.ownersMenu}`);
    console.log(`ngAfterViewInit - seasonsMenu is ${this.seasonsMenu}`);
  }

}
