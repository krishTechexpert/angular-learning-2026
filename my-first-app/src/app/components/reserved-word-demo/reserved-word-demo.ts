import { Component } from '@angular/core';

@Component({
  selector: 'app-reserved-word-demo',
  standalone: false,
  templateUrl: './reserved-word-demo.html',
  styleUrl: './reserved-word-demo.css',
})
export class ReservedWordDemo {

   people:any=[
    {name:'alex',age:'44',salary:'2543'},
    {name:'bread',age:'37',salary:'1233'},
    {name:'mecold',age:'67',salary:'7822'},
    {name:'dekins',age:'59',salary:'6732'},
    {name:'Fluin',age:'37',salary:'3453'}
  
   
  ]
}
