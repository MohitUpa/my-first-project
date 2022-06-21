import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-home-route',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeRouteComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  onLoadServer(id: number) {
    //calculation
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: (1) }, fragment: 'loading' });
  }
  onLogin() {
    this.authService.login();
  }
  onLogout() {
    this.authService.logout();
  }
}
