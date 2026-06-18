import { Component,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-b',
  standalone: false,
  templateUrl: './child-b.html',
  styleUrl: './child-b.css',
})
export class ChildB {

  @Input() name:string=''; // name parentA sy ayega
  @Input() age:number=0; // age ParentA sy ayega

  @Output() childData = new EventEmitter<string>();

  sendToParent(){
    this.childData.emit(`Mera naam ${this.name} hai!`);
  }
}


/** 
Summary — 3 cheezein yaad rakho
1. @Output()      →  Child mein lagao — "main kuch bhejunga"
2. EventEmitter   →  Courier boy — actual delivery karta hai
3. emit()         →  "Parcel do courier ko — abhi bhejo!" 

Child:   @Output() myEvent = new EventEmitter<string>();
         this.myEvent.emit('data');

Parent:  (myEvent)="onEvent($event)"
         $event = jo child ne emit kiya **/


/** Different types emit kar sakte ho

 * // String emit
@Output() nameEvent = new EventEmitter<string>();
this.nameEvent.emit('Krishna');

// Number emit
@Output() ageEvent = new EventEmitter<number>();
this.ageEvent.emit(28);

// Boolean emit
@Output() loginEvent = new EventEmitter<boolean>();
this.loginEvent.emit(true);

// Object emit — sabse useful!
@Output() userEvent = new EventEmitter<{name: string, age: number}>();
this.userEvent.emit({ name: 'Krishna', age: 28 });

// Koi type nahi — any
@Output() anyEvent = new EventEmitter<any>();
this.anyEvent.emit({ anything: 'goes' });
 * 
 *  */         