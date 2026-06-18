import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-demo',
  standalone: false,
  templateUrl: './data-binding-demo.html',
  styleUrl: './data-binding-demo.css',
})
export class DataBindingDemo {
  name = 'Krishna';
  price = 999;
  isLoggedIn = true;
  today = new Date();

  imageUrl = 'https://example.com/photo.jpg';
  btnDisabled = true;
  inputValue = 'Hello';
  altText = 'Profile photo';
  linkUrl = 'https://google.com';

  count:number=0;
  message:string="";

  email:string = '';

  isTrue:boolean=true;
  isLogin:boolean=true;

  isBold:boolean=false;
  hasError:boolean=true;

  // String — avoid
/**String style instead of object style — maintenance mushkil hota hai. Agar color change karna ho toh poori string parse karni padegi. */

  navStyle:string='font-size:1.2rem;color:green; font-weight:700;';
  
  // Object — recommended ✅
navStyle1 = {
  'font-size': '1.2rem',
  'color': 'green',
  'font-weight': '700'
};


  increment(){
    this.count++;
  }

  onKeyUp(event: KeyboardEvent | any) {
    this.message = event.target.value;
    console.log(event.key);         // 'a', 'b', 'Enter'
  console.log(event.target.value); // input ka value
    // React: (e) => console.log(e.key) -- same!

  }

  onSubmit() {
    console.log('Form submitted!');
  }

}
