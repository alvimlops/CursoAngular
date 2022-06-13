import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2  ) {
    //console.log(this.elementRef);
    //this.elementRef.nativeElement.style.backgroundColor = 'yellow'
    this.renderer2.selectRootElement(this.elementRef.nativeElement, 'background-color', 'yellow');

     }

}
