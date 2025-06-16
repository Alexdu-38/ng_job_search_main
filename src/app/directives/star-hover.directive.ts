import { Directive, effect, ElementRef, HostListener, inject, input, Renderer2, signal } from '@angular/core';

// TODO: Check if I can use the new host with the new Angular Version
@Directive({
  selector: '[appStarHover]'
})
export class StarHoverDirective {

  public readonly jobId = input.required<number>();
  public readonly favoriteJobsIds = input.required<number[]>();

  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  private isSelected = signal(false);

  constructor() {
    effect(() => {
      this.isSelected.set(this.favoriteJobsIds().includes(this.jobId()));
      this.updateStarClass();
    });
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (!this.isSelected()) {
      this.renderer.addClass(this.el.nativeElement, 'activate');
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (!this.isSelected()) {
      this.renderer.removeClass(this.el.nativeElement, 'activate')
    }
  }

  @HostListener('click')
  onClick() {
    this.isSelected.set(!this.isSelected());
    this.updateStarClass();
  }

  /**
   * Update the activate class according to the selected signal value
   */
  private updateStarClass() {
    if (this.isSelected()) {
      this.renderer.addClass(this.el.nativeElement, 'activate');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'activate');
    }
  }
}
