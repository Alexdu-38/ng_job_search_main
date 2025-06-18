import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StarHoverDirective } from './star-hover.directive';

@Component({
  imports: [StarHoverDirective],
  template: `
        <span
            class="boxText"
            appStarHover
            [jobId]="5"
            [favJobsIds]="[]">
        </span>`,
})
export class TestStarHoverComponent {
}

describe('StarHoverDirective', () => {
  let component: TestStarHoverComponent;
  let fixture: ComponentFixture<TestStarHoverComponent>;
  let spanEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StarHoverDirective, TestStarHoverComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestStarHoverComponent);
    component = fixture.componentInstance;
    spanEl = fixture.debugElement.query(By.css('span'));
    fixture.detectChanges();
  });

  it('hovering over span with mouseenter', () => {
    spanEl.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(spanEl.nativeElement.classList.contains('active')).toBe(true);
  });

  it('hovering over span with mouseleave', () => {
    spanEl.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    expect(spanEl.nativeElement.classList.contains('active')).toBe(false);
  });
});
