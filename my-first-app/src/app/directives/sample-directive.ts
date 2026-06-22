import { HostBinding, HostListener } from "@angular/core";
import { Directive,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[changeColor]',// 👈 attribute name, // 👈 this becomes *appIfRole in HTML
  standalone: false,
})
export class SampleDirective {

  constructor(private el: ElementRef,private r:Renderer2) {
    this.changeColor('red')
  }
 
  @HostListener('mouseenter') methodToHandleMouseEnterAction(){
    this.changeColor('green')
  }

  @HostListener('mouseleave') methodToHandleMouseExitAction(){
    this.changeColor('blue')
  }

  @HostBinding('style.backgroundColor') bgColor = 'yellow';


  changeColor(clr:string){
    this.r.setStyle(this.el.nativeElement,'color',clr)
  }



 // <h1 SampleDirective>Example of Directives </h1> nativeElement as H1 which load my SampleDirective 


//ElementRef- Direct DOM manipulation
//this.el.nativeElement.style.backgroundColor = 'yellow';
//this.el.nativeElement.innerHTML = 'Hello';
}



//with Renderer2--Safe DOM Access
// constructor(
//   private el: ElementRef,
//   private renderer: Renderer2
// ) {}

// // Safe DOM manipulation via Renderer2
// this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
// this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');
// this.renderer.addClass(this.el.nativeElement, 'active');
// this.renderer.removeClass(this.el.nativeElement, 'active');


//Side by Side — Same Task

// // ❌ ElementRef — direct, unsafe
// this.el.nativeElement.style.color = 'red';
// this.el.nativeElement.classList.add('active');
// this.el.nativeElement.setAttribute('disabled', 'true');

// // ✅ Renderer2 — safe, recommended
// this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
// this.renderer.addClass(this.el.nativeElement, 'active');
// this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');