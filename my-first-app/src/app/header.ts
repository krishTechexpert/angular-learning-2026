import { Component } from "@angular/core";

@Component({
  selector:'header-comp',
  standalone: false,      // ← bas yeh ek line add karo when u create manula component add this for angular 15

  template:`
  <h1>hello Mr. {{firstName}}{{2+2}} {{lastName}}</h1>
  `,
  styles:`
  h1{
  color:blue
  }
  `

})


export class Header{
   firstName:string;
   lastName:string; 
   constructor(){
    console.log('constructor initialized....')
    this.firstName="krshna",
    this.lastName="kumar"
   }

}