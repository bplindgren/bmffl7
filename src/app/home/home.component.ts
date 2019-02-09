import { Component, OnInit } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    console.log("BMFFL app homepage");
  }

}
