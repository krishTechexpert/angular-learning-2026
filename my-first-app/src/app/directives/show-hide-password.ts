import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appPassword]',
  standalone: false,
})
export class ShowHidePassword {
  private  isShown=false;

  constructor(private el:ElementRef){
    this.setUp();
  }

  setUp(){

    // ❌ 1. Direct DOM — document.createElement (not Angular way)
//const span = document.createElement('span');

// ❌ 2. addEventListener — not Angular way
//span.addEventListener('click', ...)

// ❌ 3. setAttribute directly — not Angular way
//this.el.nativeElement.setAttribute('type', 'text');

//You can improved check my-first-app\src\app\directives\show-hide-password-improved.ts

    const parentNode = this.el.nativeElement.parentNode;
    const span = document.createElement('span');
    span.innerHTML="show password";
    span.addEventListener('click',(event)=>{
      this.toggle(span)
    })
    parentNode.appendChild(span)
  }

  toggle(span:HTMLElement){
   this.isShown =  !this.isShown;
   if(this.isShown){
    this.el.nativeElement.setAttribute('type','text');
    span.innerHTML='hide password'
   }else{
    this.el.nativeElement.setAttribute('type','password');
    span.innerHTML='show password'
   }
  }
}



