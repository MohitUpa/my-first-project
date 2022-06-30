import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";

@Injectable()
export class ServerResolver implements Resolve<{id:number,name:string,status:string}>{
    constructor(private serverService: ServersService){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): { id: number; name: string; status: string; } | Observable<{ id: number; name: string; status: string; }> | Promise<{ id: number; name: string; status: string; }> {
        return this.serverService.getServer(+route.params['id']);
    }

}