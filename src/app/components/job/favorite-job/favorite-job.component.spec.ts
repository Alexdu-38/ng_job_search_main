import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { routes } from '../../../app.routes';
import { FavoriteJobComponent } from './favorite-job.component';

describe('FavoriteJobComponent', () => {
  let httpTesting: HttpTestingController;
  let component: FavoriteJobComponent;
  let fixture: ComponentFixture<FavoriteJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteJobComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter(routes)]
    })
    .compileComponents();

    httpTesting = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(FavoriteJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display \'No favorite choice\'', () => {
    const favJobs = Object.getOwnPropertyDescriptor(component, 'favJobs')?.value;
    Object.defineProperty([], 'favJobs', {
      ...favJobs,
      value: []
    });

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('No favorite selected');
  });
});
