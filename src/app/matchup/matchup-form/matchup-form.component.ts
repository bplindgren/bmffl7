import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() matchupEventEmt: EventEmitter<Owner[]> = new EventEmitter();

  constructor(
    private ownerService: OwnerService,
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.ownerService.getAllOwners().subscribe(o => {
      this.owners = o;
    });
  }

  emitMatchup() {
    let matchupOwners: Owner[] = [this.owner1, this.owner2];
    this.matchupEventEmt.emit(matchupOwners);
  }

  formValid(e: string): void {
    (this.owner1 && this.owner2) ? this.formIncomplete = false : null;
  }

}
