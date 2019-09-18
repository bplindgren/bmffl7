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
    this.getUserInfo();

    // get teams for favorite teams drop down
    this.teamService.getSeasonTeams(9).subscribe(res => {
      this.teams = res;
    })
  }

  getUserInfo(): void {
    let userInfo = localStorage['currentUser'];
    let usernameStartIdx = userInfo.indexOf("username") + 11;
    let usernameEndIdx = userInfo.indexOf("\"", usernameStartIdx);
    let username = userInfo.substring(usernameStartIdx, usernameEndIdx);

    this.userService.getUserInfo(username).subscribe(res => {
      this.user = res;
    });
  }

  toggleEditing(): void {
    this.editing = !this.editing;
    this.getUserInfo();
  }

  updateUser(): void {
    this.userService.updateUser(this.user).subscribe(res => {
      console.log(res);
      this.toggleEditing();
    })
  }

}
