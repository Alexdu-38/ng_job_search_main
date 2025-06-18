import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { routes } from '../../../app.routes';
import { AllJobComponent } from './all-job.component';

describe('JobListComponent', () => {
  let httpTesting: HttpTestingController;
  let component: AllJobComponent;
  let fixture: ComponentFixture<AllJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllJobComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter(routes)]
    })
    .compileComponents();

    httpTesting = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(AllJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
