import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { SeasonStats } from '../../seasonStats';
import { TeamService } from '../../team/team-service/team.service';
import { UserService } from '../user-service/user.service';
import { nflTeams } from '../../nflTeams';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user: User;
  public teams: SeasonStats[];
  public favoriteTeam: string;
  public editing: boolean = false;
  public nflTeams: string[] = nflTeams;

  constructor(
    public userService: UserService,
    public teamService: TeamService
  ) { }

  ngOnInit() {
    let userInfo = localStorage['currentUser'];
    let usernameStartIdx = userInfo.indexOf("username") + 11;
    let usernameEndIdx = userInfo.indexOf("\"", usernameStartIdx);
    let username = userInfo.substring(usernameStartIdx, usernameEndIdx);

    this.userService.getUserInfo(username).subscribe(res => {
      this.user = res;
      console.log(this.user);
    })

    // get teams
    this.teamService.getSeasonTeams(9).subscribe(res => {
      this.teams = res;
    })
  }

  toggleEditing() {
    this.editing = !this.editing;
    console.log(this.editing);
  }

  updateUser() {

  }

}
