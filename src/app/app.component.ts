import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { UserType } from './type/user.type';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  users: UserType[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.users;
  }
}
