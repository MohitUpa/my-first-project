import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMybannercss]'
})
export class MybannercssDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.boxShadow="0 2px 12px rgba(0,0,0,0.5)";
    el.nativeElement.style.borderRadius="10px";
    el.nativeElement.style.textAlign="center";
    el.nativeElement.style.padding="20px";
    el.nativeElement.style.margin="auto";
    el.nativeElement.style.width="60%";
  }
}
