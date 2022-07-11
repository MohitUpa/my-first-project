import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './mycomponents/todos/todos.component';
import { HeaderComponent } from './testcomponent/header/header.component';
import { FooterComponent } from './testcomponent/footer/footer.component';
import { Assignment1Component } from './testcomponent/assignment1/assignment1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { TestDirective } from './directives/test.directive';
import { ParentComponent } from './data-send-components/input-output/parent/parent.component';
import { ChildComponent } from './data-send-components/input-output/parent/child/child.component';
import { ViewChildComponent } from './data-send-components/view-child/view-child.component';
import { Child1Component } from './data-send-components/view-child/child/child.component';
import { ServiesexampleComponent } from './data-send-components/serviesexample/serviesexample.component';
import { Testexaple1Component } from './data-send-components/serviesexample/testexaple1/testexaple1.component';
import { Testexaple2Component } from './data-send-components/serviesexample/testexaple2/testexaple2.component';
import { ObservabeExampleComponent } from './udemy/observabe-example/observabe-example.component';
import { TamplateFormExampleComponent } from './form-handling/tamplate-form-example/tamplate-form-example.component';
import { ReactiveFormExampleComponent } from './form-handling/reactive-form-example/reactive-form-example.component';
import { TestViewChildComponent } from './test-view-child/test-view-child.component';
import { TestViewChildPartComponent } from './test-view-child/test-view-child-part/test-view-child-part.component';
import { TestForm3Component } from './form-handling/test-form3/test-form3.component';
import { FormAssignmentComponent } from './form-assignment/form-assignment.component';
import { ReactiveFromComponent } from './form-assignment/reactive-from/reactive-from.component';
import { TamplateDrivenFromComponent } from './form-assignment/tamplate-driven-from/tamplate-driven-from.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatStepperModule } from '@angular/material/stepper';
import { EditReactiveFormAssignComponent } from './form-assignment/edit-reactive-form-assign/edit-reactive-form-assign.component';

@NgModule({
  declarations: [
    Child1Component,
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
    TestDirective,
    ParentComponent,
    ChildComponent,
    ViewChildComponent,
    ServiesexampleComponent,
    Testexaple1Component,
    Testexaple2Component,
    ObservabeExampleComponent,
    TamplateFormExampleComponent,
    ReactiveFormExampleComponent,
    TestViewChildComponent,
    TestViewChildPartComponent,
    TestForm3Component,
    FormAssignmentComponent,
    ReactiveFromComponent,
    TamplateDrivenFromComponent,
    EditReactiveFormAssignComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatStepperModule,
     BrowserAnimationsModule,
     NgxIntlTelInputModule, 
     TooltipModule.forRoot()
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
