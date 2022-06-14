import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[appHighlight]'
})

export class BasicHighlightDirective implements OnInit{
    constructor(private elf:ElementRef) {
    }
    ngOnInit(): void {
        this.elf.nativeElement.style.background = "lightBlue";
        this.elf.nativeElement.style.padding = "10px";
        this.elf.nativeElement.style.color = "white";
        this.elf.nativeElement.style.textAlign = "center";
    }
}