import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-case-demo',
  standalone: false,
  templateUrl: './switch-case-demo.html',
  styleUrl: './switch-case-demo.css',
})
export class SwitchCaseDemo {
  userRole:string='admin'; // try: 'admin' | 'editor' | 'viewer' | 'guest'

  roles = ['admin', 'editor', 'viewer', 'guest'];

  setRole(role:string):void{
    this.userRole=role;
  }



}
