import { Component } from '@angular/core';

@Component({
  selector: 'app-sibling-demo',
  standalone: false,
  templateUrl: './sibling-demo.html',
  styleUrl: './sibling-demo.css',
})
export class SiblingDemo {
  theme:string="dark";
  setTheme(newTheme:string){

    this.theme=newTheme
  }

  // getTheme(){
  //   return this.theme;
  // }
  
}
