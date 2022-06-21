import { Component } from '@angular/core';

@Component({
  selector: 'app-users-route',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersRouteComponent {
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];
}
