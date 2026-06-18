import { Component,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-theme-bar',
  standalone: false,
  templateUrl: './theme-bar.html',
  styleUrl: './theme-bar.css',
})
export class ThemeBar {

  @Input()  myTheme:string='';

  // not working
  //@Output() getThemeFn = new EventEmitter<void>();// sent to parent

  /*The child cannot ask:

"Parent, please return a value to me."

using EventEmitter.

EventEmitter is one-way:

Child -----> Parent

not

Child <-----> Parent*/

  // showTheme(){ // not worked
  //   this.getThemeFn.emit();
  // }

}
