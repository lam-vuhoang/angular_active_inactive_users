import { Component } from '@angular/core';
import { UserType } from '../type/user.type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  users: UserType[];

  constructor(private userService: UserService) {
    this.userService = userService;
    this.users = this.userService.users;
  }

  onChangeStatus(id: number): void {
    this.userService.onChangeStatus(id);
  }
}
