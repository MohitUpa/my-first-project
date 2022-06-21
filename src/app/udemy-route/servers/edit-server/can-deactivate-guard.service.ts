import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs"

export interface CanDeactivateComponent {
    canDeactivate:() => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuardService implements CanDeactivate<CanDeactivateComponent> {
    canDeactivate(component: CanDeactivateComponent, 
                  currentRoute: ActivatedRouteSnapshot, 
                  currentState: RouterStateSnapshot, 
                  nextState?: RouterStateSnapshot):
                  boolean | UrlTree | Observable<boolean 
                  | UrlTree> | Promise<boolean | UrlTree> {
        return component.canDeactivate();
    }
}