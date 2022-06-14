import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor:string = 'Black';
  @Input() highlightColor:string = 'lightblue';

  @HostBinding('style.boxShadow') BoxShadow: string;
  @HostBinding('style.color') color: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {

  }
  ngOnInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'background', "lightgrey");
    this.renderer.setStyle(this.elRef.nativeElement, 'color', "blue");
    this.renderer.setStyle(this.elRef.nativeElement, 'textAlign', "center");
    this.renderer.setStyle(this.elRef.nativeElement, 'padding', "10px");
    this.color = this.defaultColor;

  }
  

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background', "grey");
    this.BoxShadow = "0 2px 12px rgba(0,0,0,0.5)";
    this.color = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background', "lightgrey");
    this.BoxShadow = "0 2px 12px rgba(0,0,0,0.2)";
    this.color = this.defaultColor;
  }
}
