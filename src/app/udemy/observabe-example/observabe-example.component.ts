import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observabe-example',
  templateUrl: './observabe-example.component.html',
  styleUrls: ['./observabe-example.component.css']
})
export class ObservabeExampleComponent implements OnInit, OnDestroy {

  // private firstSub: Subscription;

  // constructor() { }

  ngOnInit(): void {

  //   const customeObservable = Observable.create(observer=>{
  //     let count = 0;
  //     setInterval(
  //       ()=> {
  //          observer.next(count);
  //          count++;
  //       }, 1000
  //     );
  //   });

  //   this.firstSub = customeObservable.subscribe(
  //     data=> {
  //       console.log(data);        
  //     }
  //   );


  }

  ngOnDestroy(): void {
    // this.firstSub.unsubscribe();
  }

}
