import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFadeInOnScroll]',
  standalone:true
})
export class FadeInOnScrollDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setInitialStyles();
  }

  private setInitialStyles() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(20px)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'opacity 0.5s ease-out, transform 0.5s ease-out');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
    }
  }
}
