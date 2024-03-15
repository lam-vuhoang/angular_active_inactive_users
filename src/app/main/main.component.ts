import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  users: {
    id: number,
    name: string,
    status: boolean
  }[] = [
    {
      id: 0,
      name: 'John',
      status: true
    },
    {
      id: 1,
      name: 'Jane',
      status: false
    },
    {
      id: 2,
      name: 'Jim',
      status: true
    },
    {
      id: 3,
      name: 'Jill',
      status: false
    }
  ];

  onChangeStatus(id: number): void {
    this.users[id].status = !this.users[id].status;
  }
}
