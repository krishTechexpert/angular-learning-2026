import { Component } from '@angular/core';

@Component({
  selector: 'app-life-cycle-parent',
  standalone: false,
  templateUrl: './life-cycle-parent.html',
  styleUrl: './life-cycle-parent.css',
})
export class LifeCycleParent {
  status=false;
  prop='hello'
}
