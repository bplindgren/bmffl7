import { Component, OnInit } from '@angular/core';
import { recentGames } from '../test-objects/games/recentGames';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public recent = recentGames;

  constructor() { }

  ngOnInit() {
    console.log(this.recent);
  }

}
