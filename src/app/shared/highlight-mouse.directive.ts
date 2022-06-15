import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  //quando passar o mouse fica amarelo
  @HostListener('mouseenter') onMouseOver(){
  //  this.renderer2.selectRootElement(this.elementRef.nativeElement);
  this.backgroundColor = 'yellow'
  }

  //quando tira o mouse volta ao normal
  @HostListener('mouseleave') onMouseLeave(){
   // this.renderer2.selectRootElement(this.elementRef.nativeElement);
   this.backgroundColor = 'white'
  }

  //Exemplo com o HostBinding
  @HostBinding('style.backgroundColor') backgroundColor: String | undefined;

  constructor(
    //private elementRef: ElementRef,
     //private renderer2:Renderer2
     ) { }

}
