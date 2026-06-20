import { Component } from '@angular/core';

@Component({
  selector: 'app-track-by-demo',
  standalone: false,
  templateUrl: './track-by-demo.html',
  styleUrl: './track-by-demo.css',
})
export class TrackByDemo {
  employess:any=[];
  constructor(){
    this.employess=[

      {code:'1',name:'Tobia',gender:'female',salary:'12345'},
      {code:'2',name:'Evana',gender:'female',salary:'2345'},
      {code:'3',name:'Julie',gender:'female',salary:'54321'},
      {code:'4',name:'Max',gender:'male',salary:'54778'}
    ]
  }

  getEmployess():void{
    this.employess=[

      {code:'1',name:'Tobia',gender:'female',salary:'12345'},
      {code:'2',name:'Evana',gender:'female',salary:'2345'},
      {code:'3',name:'Julie',gender:'female',salary:'54321'},
      {code:'4',name:'Max',gender:'male',salary:'54778'},
      {code:'5',name:'Paul',gender:'male',salary:'34778'}
    ]
  }
  addEmployees(){
    this.employess.push({
      code:'6',name:'Pascal',gender:'male',salary:'897654'
    })
  }

trackByEmpCode(index:number,emp:any):string{
 // console.log(emp)
    return emp.code // 👈 same as key={emp.id} in React
}
//update the code with trackByEmpCode function
}
