import { Component,ChangeDetectorRef  } from '@angular/core';

@Component({
  selector: 'app-access-child-component-method-example',
  standalone: false,
  templateUrl: './access-child-component-method-example.html',
  styleUrl: './access-child-component-method-example.css',
})
export class ChildComponent {

    count:number=0;

//Fix 2 — Add ChangeDetectorRef in Child ✅ Proper Fix
//when you want to see count will be updated in access-child-component-method.html files

constructor(private cdr: ChangeDetectorRef) {}

    increment() {
    this.count++;
    console.log('child count:', this.count);
    this.cdr.detectChanges(); // 👈 tell Angular to update UI

  }

  reset() {
    this.count = 0;
    this.cdr.detectChanges(); // 👈 tell Angular to update UI

  }
}
