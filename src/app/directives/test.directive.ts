import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnInit{

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) { }

//   @Input()
//  set delayRendering(  delayTime: number): void { }

  ngOnInit() {
    // setTimeout(() => {
    //   this.container.createEmbeddedView(this.template);
    // }, this.delayRendering);
  }

}
