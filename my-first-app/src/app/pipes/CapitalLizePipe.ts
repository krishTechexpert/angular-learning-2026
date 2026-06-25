
// manual method
import {Pipe,PipeTransform} from "@angular/core";

@Pipe({
    name:'capitalize',  // 👈 this is what you use in HTML
     standalone: false,
}) 

export class CapitalLizePipe implements PipeTransform {
    transform(value:string, ...args:string[]):any{
        //{{ name | capitalize }}           → args = []
        //{{ name | capitalize:'extra' }}   → args = ['extra']
        //\w — First Letter of a Word
        //\S  means  →  any character that is NOT a space
        //*   means  →  zero or more times
        //So \S* = keep going until you hit a space

//         /\w\S*/g  means:

// Find a letter (\w)         →  k
// + everything after (\S*)   →  rishna
// + do it for all words (g)  →  krishna, kumar


// Pass 1:
// "krishna kumar"
//  ↑
//  starts here → finds 'k'  (\w matches)
//  keeps going → 'rishna'   (\S* matches)
//  stops at   → ' '         (space! \S* stops)
 
//  MATCH FOUND = "krishna"
//  👇 callback fires
//  function("krishna") runs


// Pass 2:
// "krishna kumar"
//          ↑
//          continues from here → finds 'k'  (\w matches)
//          keeps going → 'umar'             (\S* matches)
//          stops at   → end of string
         
//          MATCH FOUND = "kumar"
//          👇 callback fires
//          function("kumar") runs

// "krishna kumar".replace(/\w\S*/g, function(text) {
//   console.log('callback fired! text =', text);
//   return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
// });

// // Console output:
// // callback fired! text = krishna   ← 1st call
// // callback fired! text = kumar     ← 2nd call

        if(!value) return value;
        return value.replace(/\w\S*/g,function(text){
                return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
        })
    }

}