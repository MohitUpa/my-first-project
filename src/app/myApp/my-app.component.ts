import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
//   styleUrls: ['./shopping-list.component.css']
})
export class MyAppComponent implements OnInit {
  
  loadedFeature = 'recipe';

  constructor() { }

  ngOnInit(): void {
  }
  
  onNavigate(feature:any) {
    console.log(feature);
    this.loadedFeature = feature;
  }

}
