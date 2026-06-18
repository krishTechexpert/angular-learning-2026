import { Component } from '@angular/core';

@Component({
  selector: 'app-for-if-demo',
  standalone: false,
  templateUrl: './for-if-demo.html',
  styleUrl: './for-if-demo.css',
})
export class ForIfDemo {
  people:any[]=[{
    name:"sachin",
    age:21,
  },{
    name:"rahul",
    age:15,
  },{
    name:"shewagh",
    age:38
  }]
}
