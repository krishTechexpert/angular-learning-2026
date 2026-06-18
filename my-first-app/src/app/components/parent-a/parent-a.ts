import { Component } from '@angular/core';
type User={
  name:string,
  age:number
}
@Component({
  selector: 'app-parent-a',
  standalone: false,
  templateUrl: './parent-a.html',
  styleUrl: './parent-a.css',
})



export class ParentA {
  user:User={
    name:'Rahul',
    age:20
  }
  receivedData:string=''; // yahan store hoga

  onChildData(data: string) {
        //  $event yahan aaya — "Mera naam Rahul hai!"

    this.receivedData = data;
  }
}
