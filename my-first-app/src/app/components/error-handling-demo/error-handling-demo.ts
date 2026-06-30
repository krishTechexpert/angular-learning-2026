import { Component } from '@angular/core';

@Component({
  selector: 'app-error-handling-demo',
  standalone: false,
  templateUrl: './error-handling-demo.html',
  styleUrl: './error-handling-demo.css',
})
export class ErrorHandlingDemo {
  user={
    name:'sachin',
    age:null,
    email:'',
    address:{
      city:'mumbai'
    },
    company:{
      name:'ipl'
    }
  }
}
