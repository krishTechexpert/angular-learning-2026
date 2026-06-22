import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfRole]',  // 👈 this becomes *appIfRole in HTML, // 👈 attribute name
  standalone: false,  

})
export class IfRoleDirective {

  constructor(
    private template: TemplateRef<any>,        // 👈 the HTML inside the tag,  in react as children prop
    private container: ViewContainerRef        // 👈 where to render it , in react the DOM placeholder
  ) {}

  @Input() set appIfRole(role: string) {
    if (role === 'admin') {
      this.container.createEmbeddedView(this.template);  // 👈 SHOW  (like returning children in React)
    } else {
      this.container.clear();                            // 👈 HIDE  (like returning null in React)
    }
  }

}