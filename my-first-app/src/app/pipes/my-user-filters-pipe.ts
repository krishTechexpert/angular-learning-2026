import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../components/pipe-demo/User';

@Pipe({
  name: 'myUserFilters',
  standalone: false,
    // pure: true // ← this is DEFAULT, Angular adds it automatically

   // pure: false →  runs on EVERY change detection (catches everything ✅ but slower)


})
export class MyUserFiltersPipe implements PipeTransform {
  //filterString is the value as we enter in input text field
  //property i sthe value we defined in User Interface so basically we filter by name property
  transform(value: User[], filterString:string,property:string): User[] {
    //        👆 full array  👆 "kri"              👆 "name"
//     value        = entire userList array
// filterString = whatever user typed → "kri"
// property     = which field to filter → "name"
    console.log('pipe run')
    if(value.length ===0 || !filterString ){
      //value.length === 0  →  empty array? return as is
     // !filterString       →  user typed nothing? return all users
     //filterString = ""   →  !filterString = true  → return all users ✅


//      filterBy = ''
// !filterBy = true
// → pipe returns full userList directly
// → *ngFor renders ALL users including new one ✅

      return value
    }
    //filterString = "kri" → !filterString = false → continue filtering

    let filteredUsers:User[]=[];
//     Start with empty basket 🧺
// We'll add matching users here one by one

// property = "name"

// user["name"]  →  "Krishna Kumar"
// //  👆 dynamic key access — like user.name but with variable

//keyof User tells TypeScript:

// Only allow valid User properties
// property = "name"    ✅ exists in User
// property = "email"   ✅ exists in User
// property = "xyz"     ❌ TypeScript error — not in User


// "Krishna Kumar".toString()  →  "Krishna Kumar"
// //  👆 converts to string — safe for number fields too
// //  if salary = 50000 → 50000.toString() → "50000"

// filterString = "kri"
// filterString.toLowerCase() = "kri"

// "krishna kumar".includes("kri")  →  true  ✅
// "priya sharma".includes("kri")   →  false ❌
// "rahul verma".includes("kri")    →  false ❌

    for(let user of value){
      if(user[property as keyof User].toString().toLowerCase().includes(filterString.toLowerCase())){
        filteredUsers.push(user)
      }
    }
    return filteredUsers;
  }
}
