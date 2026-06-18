import { Component } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  standalone: false,
  templateUrl: './grand-child.html',
  styleUrl: './grand-child.css',
})
export class GrandChild {
  count:number=3
}
