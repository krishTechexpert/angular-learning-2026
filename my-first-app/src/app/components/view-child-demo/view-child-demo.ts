import { Component,ViewChild,AfterViewInit } from '@angular/core';
import {ChildComponent} from "../access-child-component-method-example/access-child-component-method-example";
@Component({
  selector: 'app-view-child-demo',
  standalone: false,
  templateUrl: './view-child-demo.html',
  styleUrl: './view-child-demo.css',
})
export class ViewChildDemo implements AfterViewInit  {

  // 👇 get reference to CHILD COMPONENT
  @ViewChild(ChildComponent) child!: ChildComponent;
    //          👆 component class — not string!


  ngAfterViewInit(): void {
    console.log('child count:', this.child.count); // 0
  }

    // parent calling child method directly!

  incrementChild(){
    this.child.increment(); // ✅ calls child method
  }

  resetChild(){
    this.child.reset(); // ✅ calls child method

  }

}
