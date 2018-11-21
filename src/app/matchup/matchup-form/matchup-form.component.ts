import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Owner } from '../../owner';
import { OwnerService } from '../../owner/owner-service/owner.service';
import { GameService } from '../../game.service';

@Component({
  selector: 'matchup-form',
  templateUrl: './matchup-form.component.html',
  styleUrls: ['./matchup-form.component.css']
})
export class MatchupFormComponent implements OnInit {
  owners: Owner[];
  owner1: Owner;
  owner2: Owner;
  formIncomplete: boolean = true;

  constructor(
    private ownerService: OwnerService,
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.ownerService.getAllOwners().subscribe(o => {
      this.owners = o;
    });
  }

  getMatchup() {
    console.log(this.owner1, this.owner2);
    this.gameService.getMatchupGames(this.owner1.id, this.owner2.id).subscribe(res => {
      console.log(res);
    });
  }

  formValid(e: string): void {
    console.log(this.formIncomplete);
    (this.owner1 && this.owner2) ? this.formIncomplete = false : null;
    console.log(this.formIncomplete);
  }

}
