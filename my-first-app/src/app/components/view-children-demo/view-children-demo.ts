import { Component,ViewChildren,AfterViewInit,QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-children-demo',
  standalone: false,
  templateUrl: './view-children-demo.html',
  styleUrl: './view-children-demo.css',
})
export class ViewChildrenDemo implements AfterViewInit {

  users = [
    { name: 'Krishna', active: false },
    { name: 'Priya',   active: false },
    { name: 'Rahul',   active: false },
  ];

  // 👇 gets ALL #userItem elements
  @ViewChildren('userItem') userItems!: QueryList<ElementRef>;
    //                                    👆 QueryList = like array

  
  ngAfterViewInit(): void {
    console.log('total items:', this.userItems.length); // 3
    
    // loop through all items
    this.userItems.forEach((item, index) => {
      console.log(`item ${index}:`, item.nativeElement.textContent);
    });
  }

    // highlight all items
    highlightAll() {
      this.userItems.forEach(item => {
        item.nativeElement.style.backgroundColor = 'yellow';
      });
    }
  
    // highlight first item only
    highlightFirst() {
      const first = this.userItems.first; // 👈 QueryList.first
      first.nativeElement.style.backgroundColor = 'lightgreen';
    }
  
    // highlight last item only
    highlightLast() {
      const last = this.userItems.last; // 👈 QueryList.last
      last.nativeElement.style.backgroundColor = 'lightcoral';
    }
  

    // static: true example 
// ngOnInit() {
//   this.myInput.nativeElement.focus(); // ✅ works with static:true
// }

// // static: false example (Defauly way)
// ngAfterViewInit() {
//   this.myInput.nativeElement.focus(); // ✅ works with static:false
// }

}
