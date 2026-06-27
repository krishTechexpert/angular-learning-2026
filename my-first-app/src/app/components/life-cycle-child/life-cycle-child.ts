import { Component,Input,OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,
AfterViewInit,AfterViewChecked,OnDestroy,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-child',
  standalone: false,
  templateUrl: './life-cycle-child.html',
  styleUrl: './life-cycle-child.css',
})
export class LifeCycleChild implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  @Input() prop!:string; // suppose u dont want to initiliaze default value in prop so u can used ! (for safety)

constructor(){
  console.log('[constructor fired]');
  console.log(`prop:${this.prop}`);
  this.prop='TEST';
  console.log(`prop:${this.prop}`)

}
//fire on input binding
ngOnChanges(changes: SimpleChanges): void {
  console.log('[OnChanges fired]')
  console.log(`prop:${this.prop}`);
  console.log('changes',changes)

}

ngOnInit(): void {
  console.log('[OnInit fired]');
  console.log(`prop:${this.prop}`);

}

ngDoCheck(): void {
  console.log('[DoCheck fired]');

}

ngAfterContentInit(): void {
  console.log('[ngAfterContentInit fired]');

}
ngAfterContentChecked(): void {
  console.log('[ngAfterContentChecked fired]');

}
ngAfterViewInit(): void {
  console.log('[ngAfterViewInit fired]');

}
ngAfterViewChecked(): void {
  console.log('[ngAfterViewChecked fired]');

}
ngOnDestroy(): void {
  console.log('[ngOnDestroy fired]');

}

}
