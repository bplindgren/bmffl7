import { Component } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { User } from '../../user';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User();
  errorMessage: String;

  constructor(
    private userService: UserService,
    private router: Router) {
  }

  login() {
    this.userService.login(this.user).subscribe(res => {
      this.router.navigate(['/home']);
    }, err => {
      console.log(err);
      this.errorMessage = "Username or Password is incorrect.";
    })
  }

}
