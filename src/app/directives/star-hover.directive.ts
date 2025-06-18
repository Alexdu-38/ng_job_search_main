import { Directive, effect, ElementRef, HostListener, inject, input, Renderer2, signal } from '@angular/core';

const ACTIVE_CLASS = 'active';

@Directive({
  selector: '[appStarHover]'
})
export class StarHoverDirective {

  public readonly jobId = input.required<number>();
  public readonly favJobsIds = input.required<number[]>();

  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  private isSelected = false;

  constructor() {
    effect(() => {
      this.isSelected = this.favJobsIds().includes(this.jobId());
      this.updateStarClass();
    });
  }

  @HostListener('mouseenter')
  public onMouseEnter(): void {
    if (!this.isSelected) {
      this.renderer.addClass(this.el.nativeElement, ACTIVE_CLASS);
    }
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    if (!this.isSelected) {
      this.renderer.removeClass(this.el.nativeElement, ACTIVE_CLASS)
    }
  }

  @HostListener('click')
  public onClick(): void {
    this.isSelected = !this.isSelected;
    this.updateStarClass();
  }

  /**
   * Update the activate class according to the selected value
   */
  private updateStarClass() {
    if (this.isSelected) {
      this.renderer.addClass(this.el.nativeElement, ACTIVE_CLASS);
    } else {
      this.renderer.removeClass(this.el.nativeElement, ACTIVE_CLASS);
    }
  }
}
