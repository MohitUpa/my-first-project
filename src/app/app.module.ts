import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './mycomponents/todos/todos.component';
import { HeaderComponent } from './testcomponent/header/header.component';
import { FooterComponent } from './testcomponent/footer/footer.component';
import { Assignment1Component } from './testcomponent/assignment1/assignment1.component';
import { FormsModule } from '@angular/forms';
import { UdemyComponent } from './udemy/udemy.component';
import { HeaderMyAppComponent } from './myApp/header/header.component';
import { RecipesComponent } from './myApp/recipes/recipes.component';
import { RecipeListComponent } from './myApp/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './myApp/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './myApp/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './myApp/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './myApp/shopping-list/shopping-edit/shopping-edit.component';
import { MycomponentsComponent } from './mycomponents/mycomponents.component';
import { TodosHeaderComponent } from './mycomponents/todos-header/todos-header.component';
import { TodoItemComponent } from './mycomponents/todo-item/todo-item.component';
import { CockpitComponent } from './udemy/cockpit/cockpit.component';
import { ServerElementComponent } from './udemy/server-element/server-element.component';
import { Assignment2Component } from './testcomponent/assignment2/assignment2.component';
import { ProductComponent } from './testcomponent/assignment2/product/product.component';
import { MyAppComponent } from './myApp/my-app.component';
import { AddTodoComponent } from './mycomponents/add-todo/add-todo.component';
import { FooterRecipeComponent } from './myApp/footer-recipe/footer.component';
import { Assignment3Component } from './testcomponent/assignment3/assignment3.component';
import { Assignment4Component } from './testcomponent/assignment4/assignment4.component';
import { MybannercssDirective } from './directives/myStyle/mybannercss.directive';
import { DirectiesUdemyComponent } from './udemy/directies-udemy/directies-udemy.component';
import { BasicHighlightDirective } from './directives/udemyDirectives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/udemyDirectives/better-highlight.directive';
import { SliderComponent } from './testcomponent/slider/slider.component';
import { NewAccountComponent } from './udemy/new-account/new-account.component';
import { AccountComponent } from './udemy/account/account.component';
import { ProductServicesComponent } from './testcomponent/assignment5/product-services/product-services.component';
import { UdemyRouteComponent } from './udemy-route/udemy-route.component';
import { UsersRouteComponent } from './udemy-route/users/users.component';
import { ServerRouteComponent } from './udemy-route/servers/server/server.component';
import { EditServerRouteComponent } from './udemy-route/servers/edit-server/edit-server.component';
import { ServersRuoteComponent } from './udemy-route/servers/servers.component';
import { HomeRouteComponent } from './udemy-route/home/home.component';
import { UserRuteComponent } from './udemy-route/users/user/user.component';
import { PageNotFoundComponent } from './udemy-route/page-not-found/page-not-found.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuardService } from './udemy-route/servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './udemy-route/error-page/error-page.component';
import { ServerResolver } from './udemy-route/servers/server/server-resolver.service';
import { ServersService } from './udemy-route/servers/servers.service';


@NgModule({
  declarations: [
    UserRuteComponent,
    HomeRouteComponent,
    ServersRuoteComponent,
    EditServerRouteComponent,
    ServerRouteComponent,
    UsersRouteComponent,
    AppComponent,
    TodosComponent,
    HeaderComponent,
    FooterComponent,
    Assignment1Component,
    UdemyComponent,
    HeaderMyAppComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    MycomponentsComponent,
    TodosHeaderComponent,
    TodoItemComponent,
    CockpitComponent,
    ServerElementComponent,
    Assignment2Component,
    ProductComponent,
    MyAppComponent,
    AddTodoComponent,
    FooterRecipeComponent,
    Assignment3Component,
    Assignment4Component,
    MybannercssDirective,
    DirectiesUdemyComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    SliderComponent,
    NewAccountComponent,
    AccountComponent,
    ProductServicesComponent,
    UdemyRouteComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule
    // RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RecipeItemComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    CanDeactivateGuardService,
    ServersService,
    ServerResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
