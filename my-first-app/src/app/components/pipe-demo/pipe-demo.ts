import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  standalone: false,
  templateUrl: './pipe-demo.html',
  styleUrl: './pipe-demo.css',
})
export class PipeDemo {
  num1:number=12.638467846;
  x:number=0.5;
  langulage:string="ANGULAR";
  rows:any={
    a:1,
    b:2
  }
}
