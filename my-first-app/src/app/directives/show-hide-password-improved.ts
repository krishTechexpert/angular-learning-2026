
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appShowHidePasswordImproved]',
  standalone: false,
})
export class ShowHidePasswordImproved {
  private isShown = false;
  private span: any;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2   // 👈 safe DOM manipulation
  ) {
    this.setUp();
  }

  setUp() {
    const parentNode = this.el.nativeElement.parentNode;

    // ✅ Renderer2 instead of document.createElement
    this.span = this.renderer.createElement('span');
    const text = this.renderer.createText('Show Password');
    this.renderer.appendChild(this.span, text);

    // ✅ Renderer2 listen instead of addEventListener
    this.renderer.listen(this.span, 'click', () => {
      this.toggle();
    });

    // ✅ Add some style
    this.renderer.setStyle(this.span, 'cursor', 'pointer');
    this.renderer.setStyle(this.span, 'marginLeft', '8px');
    this.renderer.setStyle(this.span, 'color', 'blue');
    this.renderer.setStyle(this.span, 'userSelect', 'none');

    this.renderer.appendChild(parentNode, this.span);
  }

  toggle() {
    this.isShown = !this.isShown;

    if (this.isShown) {
      // ✅ Renderer2 setAttribute
      this.renderer.setAttribute(this.el.nativeElement, 'type', 'text');
      this.renderer.setProperty(this.span, 'innerHTML', 'Hide Password');
    } else {
      this.renderer.setAttribute(this.el.nativeElement, 'type', 'password');
      this.renderer.setProperty(this.span, 'innerHTML', 'Show Password');
    }
  }
}
