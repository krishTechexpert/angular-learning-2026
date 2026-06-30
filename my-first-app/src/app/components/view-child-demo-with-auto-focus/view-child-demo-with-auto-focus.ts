import { Component,AfterViewInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-child-demo-with-auto-focus',
  standalone: false,
  templateUrl: './view-child-demo-with-auto-focus.html',
  styleUrl: './view-child-demo-with-auto-focus.css',
})
export class ViewChildDemoWithAutoFocus {

  // 👇 get reference to #myInput in template
  @ViewChild('myInput') myInput!:ElementRef;
    //          👆 template ref name 
    // 
    //        myInput!                   👆 non-null assertion

    // Tells TypeScript:
    // "I KNOW this will not be null — trust me!"
    // Because Angular sets it in ngAfterViewInit
    // TypeScript can't see that — so we use !


  ngAfterViewInit():void{
    // ✅ DOM ready — safe to access here
    this.myInput.nativeElement.focus();
    console.log('input element:', this.myInput.nativeElement);

  }
}
