import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router) {
  }

  ngOnInit() {
    this.userService.logOut().subscribe(res => {
      localStorage['currentUser'] = null;
      this.router.navigate(['/home']);
    }, err => {
      console.log("error logging out");
    })
  }
}
