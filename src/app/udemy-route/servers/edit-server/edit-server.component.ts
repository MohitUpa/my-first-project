import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';
import { CanDeactivateComponent } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server-route',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerRouteComponent implements OnInit,CanDeactivateComponent {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParamMap);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
        (queryParams: Params) => {
          this.allowEdit = queryParams['allowEdit'] === '1' ? true : false
        }
    );
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (params:Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    )
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
    this.router.navigate(['../',{relativeTo:this.route}]);
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if(!this.allowEdit) {
      return true;
    }
    if(this.serverName !== this.server.name ||
       this.serverStatus !== this.server.status
       && !this.changesSaved) {
        return confirm('Do You want to discard changes');
    } else {
      return true;
    }
  }
}
