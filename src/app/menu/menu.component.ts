import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// export class MenuComponent {
//   isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
//   constructor(private breakpointObserver: BreakpointObserver) {}
// }
