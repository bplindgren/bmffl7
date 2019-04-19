import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { MatFormFieldModule, MatInputModule } from '@angular/material'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(response => {
      console.log(response);
    });

  }

}
