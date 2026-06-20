import { Component } from '@angular/core';

@Component({
  selector: 'app-for-if-demo',
  standalone: false,
  templateUrl: './for-if-demo.html',
  styleUrl: './for-if-demo.css',
})
export class ForIfDemo {
  numbers:number[]=[];
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

constructor(){
  let i=0;
  while(i<5){
    this.numbers.push(i);
    i++;
  }
}

}
