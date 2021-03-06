import { Component } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { Router } from '@angular/router';
import { User } from '../../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  private user: User = new User();
  private errorMessage: String;

  constructor(
    public userService: UserService,
    public router: Router
  ) { }

  register(): void {
    this.userService.register(this.user).subscribe(response => {
      this.router.navigate(['/user/login']);
    }, err => {
      this.errorMessage = "Username already exists";
    })
  }

}
