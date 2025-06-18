import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { routes } from '../../../app.routes';
import { DetailJobComponent } from './detail-job.component';

describe('DetailJobComponent', () => {
  let httpTesting: HttpTestingController;
  let component: DetailJobComponent;
  let fixture: ComponentFixture<DetailJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailJobComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter(routes)]
    })
    .compileComponents();

    httpTesting = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(DetailJobComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('jobId', 98596);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
