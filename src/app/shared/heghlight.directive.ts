import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Heghlight]'
})
export class HeghlightDirective {


  @HostListener('mouseenter') onMouseOver(){

    this.backgroundColor = this.highlightColor;
    }


    @HostListener('mouseleave') onMouseLeave(){

     this.backgroundColor = this.defaultColor;
    }


    @HostBinding('style.backgroundColor') backgroundColor: String | undefined;



    @Input('highlight') defaultColor:string = 'white';
    @Input() highlightColor:string = 'yellow'

    constructor(

       ) { }

       ngOnInit(){
        this.backgroundColor = this.defaultColor;

       }

}
