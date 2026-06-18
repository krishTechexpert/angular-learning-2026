import { Component,output,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  @Output() setThemeFn = new EventEmitter<string>();// sent to parent
//  @Output() is used to notify the parent.

//using EventEmitter.

//EventEmitter is one-way: child to parent only

  flag:boolean=false;

  sendToParent(){
    this.flag=!this.flag;
    this.setThemeFn.emit(this.flag ? "Light" : "Dark")
  }
}
