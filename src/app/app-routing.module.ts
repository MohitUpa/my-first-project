import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { EditReactiveFormAssignComponent } from './form-assignment/edit-reactive-form-assign/edit-reactive-form-assign.component';
import { TestForm3Component } from './form-handling/test-form3/test-form3.component';
import { ErrorPageComponent } from './udemy-route/error-page/error-page.component';
import { HomeRouteComponent } from './udemy-route/home/home.component';
import { PageNotFoundComponent } from './udemy-route/page-not-found/page-not-found.component';
import { CanDeactivateGuardService } from './udemy-route/servers/edit-server/can-deactivate-guard.service';
import { EditServerRouteComponent } from './udemy-route/servers/edit-server/edit-server.component';
import { ServerResolver } from './udemy-route/servers/server/server-resolver.service';
import { ServerRouteComponent } from './udemy-route/servers/server/server.component';
import { ServersRuoteComponent } from './udemy-route/servers/servers.component';
import { UserRuteComponent } from './udemy-route/users/user/user.component';
import { UsersRouteComponent } from './udemy-route/users/users.component';

const routes: Routes = [];

const appRoutes: Routes = [
  { path: '', component: HomeRouteComponent },
  { path: 'form', component: TestForm3Component},
  { path: 'reactive-edit/:id', component: EditReactiveFormAssignComponent },
  {
    path: 'users', component: UsersRouteComponent, children: [
      { path: ':id/:name', component: UserRuteComponent },
    ]
  },
  {
    path: 'servers',
    // canActivate: [AuthGuard]
    canActivateChild: [AuthGuard], component: ServersRuoteComponent,
    children: [
      { path: ':id', component: ServerRouteComponent, resolve: {server: ServerResolver} },
      {
        path: ':id/edit', component: EditServerRouteComponent,
        canDeactivate: [CanDeactivateGuardService]
      }
    ]
  },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data:{message:'404 (page not found!)'} },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];

@NgModule({
  // imports: [RouterModule.forRoot(appRoutes,{useHash:true})],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
