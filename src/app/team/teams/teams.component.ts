import { Component, OnInit } from '@angular/core';
import { Team } from '../../team';
import { TeamService } from '../team-service/team.service';
import { TeamsTableComponent } from '../teams-table/teams-table.component';
import { SeasonStats } from '../../seasonStats';

import { Owner } from '../../owner';
import { OwnerService } from '../../owner/owner-service/owner.service';

@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  private owners: Owner[];
  private allTeams: SeasonStats[];
  private displayedTeams: SeasonStats[];
  private currentDisplay: string = "allTeams";
  years: string[] = ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];

  constructor(
    private teamService: TeamService,
    private ownerService: OwnerService) {
  }

  ngOnInit() {
    this.teamService.getAllTeamsStatsView().subscribe(teams => {
      this.allTeams = this.sortTeams(teams);
      this.displayedTeams = this.allTeams;
    })
    this.ownerService.getAllOwners().subscribe(res => {
      this.owners = res;
    })
  }

  getAllTeams(): void {
    this.displayedTeams = this.allTeams;
    this.currentDisplay = "allTeams";
  }

  showOwnerForm(): void {
    this.currentDisplay = "teamsByOwner";
  }

  getTeamsByOwner(e: string): void {
    this.teamService.getOwnerTeamsStatsView(e["value"]).subscribe(teams => {
      this.displayedTeams = this.sortTeams(teams);
    })
  }

  showSeasonForm(): void {
    this.currentDisplay = "teamsBySeason";
  }

  getTeamsBySeason(e: string): void {
    let id = +e["value"] - 2010;
    this.teamService.getSeasonTeams(id).subscribe(teams => {
      this.displayedTeams = this.sortTeams(teams);
    })
  }

  sortTeams(teams: SeasonStats[]): SeasonStats[] {
    return teams.sort((a,b) =>
      (a["id"] > b["id"]) ? 1 : ((b["id"] > a["id"]) ? -1 : 0));
  }

}
