import { Component,ViewChild,ElementRef,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-view-child-read-input-value-directly-demo',
  standalone: false,
  templateUrl: './view-child-read-input-value-directly-demo.html',
  styleUrl: './view-child-read-input-value-directly-demo.css',
})
export class ViewChildReadInputValueDirectlyDemo implements AfterViewInit {

  @ViewChild('nameInput') nameInput!:ElementRef;
  @ViewChild('ageInput') ageInput!:ElementRef;

  displayValue='';

  ngAfterViewInit(): void {
    this.nameInput.nativeElement.focus();
    this.ageInput.nativeElement.focus();
    console.log('view ready!');
  }


  getValue(){
    const name = this.nameInput.nativeElement.value;
    const age  = this.ageInput.nativeElement.value;
    this.displayValue = `Name: ${name}, Age: ${age}`;
  }


}
