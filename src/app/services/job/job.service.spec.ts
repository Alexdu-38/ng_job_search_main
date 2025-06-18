import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { JobService } from './job.service';

describe('JobService', () => {
  let httpTesting: HttpTestingController;
  let jobService: JobService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    httpTesting = TestBed.inject(HttpTestingController);
    jobService = TestBed.inject(JobService);
  });

  it('Should be created', () => {
    expect(jobService).toBeTruthy();
  });

  it('Should make a get request call', () => {

    jobService.getJobs().subscribe();

    const req = httpTesting.expectOne('/jobs');
    expect(req.request.method).toBe('GET');

    httpTesting.verify();
  });
});
