import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  name = 'Mohit Upadhyay';
  assign = true;
  showAssign() {
    this.assign = true;
  }
  hideAssign() {
    this.assign = false;
  }
}
// how the module work come under .ts file 