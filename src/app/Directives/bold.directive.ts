import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[myBold]'
})
export class BoldDirective {
  // cách 1
  constructor(private element: ElementRef) {
    element.nativeElement.style.color = "red";
  }
  // // cach 2
  // constructor(private element: ElementRef,private render: Renderer2) {
  //   render.setStyle(element.nativeElement,'color','blue')
  // }

}
