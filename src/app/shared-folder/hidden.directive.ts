import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';

@Directive({ selector: '[myHidden]'})
export class HiddenDirective implements OnInit{

    @Input()
    myHidden: boolean;

    constructor(public el: ElementRef, public renderer: Renderer) {
    }

    ngOnInit() {
        console.log(this.myHidden);
        if (this.myHidden){
            this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
        }
    }
}
