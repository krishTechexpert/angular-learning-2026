import { Component,OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-user-list-component',
  standalone: false,
  templateUrl: './user-list-component.html',
  styleUrl: './user-list-component.css',
})
export class UserListComponent implements OnInit,OnDestroy {
  isLoading=true;
  isLoaded=false;
  loadTime='';
  users1:any[]=[];
  private timer: any;  // 👈 store timer reference


  constructor(){
    //Constructor = Angular's ONLY way to inject dependencies
    console.log('1. 🏗️ Constructor — class created');
  }

  ngOnInit(): void {
    console.log('✅ ngOnInit fired');

    this.timer = setTimeout(() => {  // 👈 save reference
      this.users1 = [
        { name: 'Krishna' },
        { name: 'Priya'   },
        { name: 'Rahul'   },
      ];

      this.isLoading = false;
      this.isLoaded  = true;
      this.loadTime  = new Date().toLocaleTimeString();

      console.log('✅ Data loaded!');
    }, 2000);
  }



  ngOnDestroy(): void {
    // ✅ cancel timer if component destroys before 2 seconds
    if(this.timer) {
      clearTimeout(this.timer);
      console.log('🧹 Timer cleared — no memory leak!');
    }
  }

}
